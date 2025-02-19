import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import admin from "firebase-admin";
import fs from "fs";
import path from "path";

/*
 ** Below code for our get requests that don't start with "/api" =>
 ** for our file-returning / in-preparation-for-app-release requests
 */
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Old way of importing firebase-admin
//var admin = require("firebase-admin");
//var serviceAccount = require("path/to/serviceAccountKey.json");

// New way is with the import we have on top (firebase-admin & fs) and:
const credentials = JSON.parse(fs.readFileSync("./credentials.json"));
admin.initializeApp({
    credential: admin.credential.cert(credentials),
});

// Article info for "fake" in-memory database before we implement actual db with MongoDB
// const articleInfo = [
//     { name: "learn-node", upvotes: 0, comments: [] },
//     { name: "learn-react", upvotes: 0, comments: [] },
//     { name: "mongodb", upvotes: 0, comments: [] },
// ];

// Our app initialization
const app = express();
app.use(express.json());

/*
 ** Function to connect our Database
 ** We have a variable to store our database connection.
 ** We also have the async function which connects to MongoDB:
 ** - define our uri (path to our localhost db with port 27017) -->
      If there is an environment variable MONGODB_USERNAME
 ** - define a client with the uri and some settings object
 ** - connect asynchronously to the client
 ** - specify our db as the one we created in MongoDB
 */
let db;
async function connectToDB() {
    const uri = !process.env.MONGODB_USERNAME
        ? "mongodb://127.0.0.1:27017"
        : `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.n10dh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });
    await client.connect();

    db = client.db("full-stack-react-db");
}

/*
 ** We create some simple example endpoints to send back Hello when we request on the specified path.
 */
// app.get("/hello", (req, res) => {
//     res.send("Hello from a GET endpoint!");
// });

// app.get("/hello/:name", (req, res) => {
//     res.send("Hello, " + req.params.name + " from another GET endpoint!");
// });

// app.post("/hello/", (req, res) => {
//     res.send("Hello, " + req.body.name + " from a POST endpoint!");
// });

/*
 ** Middleware needed for below endpoint
 */
app.use(express.static(path.join(__dirname, "../dist")));

/*
 ** Endpoint for requests that don't start with "/api" => send back a dist directory file (from building the app).
 ** We do this in preparation of the app for release.
 ** The RegEx inside the get request means anything that doesn't start with "/api".
 */
app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.join(__dirname), "../dist/index.html");
}),
    /*
     ** Endpoint to load data for an article => just see upvotes and comments without modifying it:
     ** - We get the name of the article from the request path (Route parameter)
     ** - We get the info we want by querying our database
     ** - We send back our json responce
     */
    app.get("/api/articles/:name", async (req, res) => {
        const { name } = req.params;
        // querying our database
        const article = await db.collection("articles").findOne({ name });

        res.json(article);
    });

/*
 ** The callback function inside app.use gets called for EVERY request that hasn't been handled (below endpoints).
 ** That's why we have it here below our app.get endpoint which we want to work for our non-authenticated users too.
 ** next -> a function we can call to tell express when our middleware is done.
 ** In the middleware (callback function) we use auth token to identify the user.
 */
app.use(async function (req, res, next) {
    // get auth token from request's headers
    const { authtoken } = req.headers;

    // we use firebase-admin to verify this auth token and get what user it corresponds to
    if (authtoken) {
        // Firebase makes sure the token is valid and if it is, it returns the user that created that token
        const user = await admin.auth().verifyIdToken(authtoken);
        // add user to the request to access from following endpoints
        req.user = user;
        // tell express our middleware is done (and go to the actual request)
        next();
    } else {
        // no auth token sent
        res.sendStatus(400);
    }
});

/*
 ** Endpoint for article upvoting:
 ** - We get the name of the article from the request path (Route parameter)
 ** - We get the user's id from the req.user --> Check app.use middleware above for Firebase authentication
 ** - We get the original article and its upvoters and see if our user can upvote
 ** - If the user can upvote, we use findOneAndUpdate with arguments to:
 **     -> find the document with such name (1st argument)
 **     -> apply the passed changes to it (2nd argument)
 **     -> setting to return before or after updating (3rd argument)
 ** - We send back a json responce --> the updated article
 */
app.post("/api/articles/:name/upvote", async (req, res) => {
    // get article's name and user's id
    const { name } = req.params;
    const { uid } = req.user;

    // load original article
    const article = await db.collection("articles").findOne({ name });

    // get article upvoters' ids or empty array [] if noone has upvoted it yet
    const upvoteIds = article.upvoteIds || [];
    // check if user has an id and hasn't already upvoted
    const canUpvote = uid && !upvoteIds.includes(uid);

    if (canUpvote) {
        const updatedArticle = await db.collection("articles").findOneAndUpdate(
            { name },
            {
                $inc: { upvotes: 1 }, // MongoDB syntax to increment a property
                $push: { upvoteIds: uid }, // MongoDB syntax to push item in array property
            },
            {
                returnDocument: "after", // return the document after it's updated
            }
        );

        // respond with the updated article
        res.json(updatedArticle);
    } else {
        // user can't upvote
        res.sendStatus(403);
    }
});

/*
 ** Endpoint for article comments:
 ** - We get the name of the article from the request path (Route parameter)
 ** - We get the new comment info (poster and comment text) from the request body
 ** - We use findOneAndUpdate with arguments to:
 **     -> find the document with such name (1st argument)
 **     -> apply the passed changes to it (2nd argument)
 **     -> setting to return before or after updating (3rd argument)
 ** - We send back a json responce --> the updated article
 */
app.post("/api/articles/:name/comments", async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    const newComment = { postedBy, text };
    const updatedArticle = await db.collection("articles").findOneAndUpdate(
        { name },
        {
            $push: { comments: newComment }, // MongoDB syntax to push item in array property
        },
        {
            returnDocument: "after", // return the document after it's updated
        }
    );

    res.json(updatedArticle);
});

/*
 ** We have a start function where:
 ** - Most platforms like to tell our app what port it should run on =>
 **   we set our port as an environment variable or 8000 as default if not specified.
 ** - connect our database by calling our connectToDB async function
 ** - start our server up to be able to respond to requests based on the endpoints we've created
 */
const PORT = process.env.PORT || 8000;
async function start() {
    await connectToDB();
    // pass the port we want our app to listen on and a callback function
    // called once our server is successfully listening
    app.listen(PORT, () => {
        console.log("Server is listening on port " + PORT);
    });
}

start();
