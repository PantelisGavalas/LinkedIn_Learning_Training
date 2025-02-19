import { useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import axios from "axios";
import CommentsList from "../CommentsList";
import AddCommentForm from "../AddCommentForm";
import articles from "../article-content";
import useUser from "../useUser";

const ArticlePage = () => {
    // We use the hook to get the URL Parameter
    const { name } = useParams();
    // We use the hook to get initial data from when loading the component --> the data our loader gets
    const { upvotes: initialUpvotes, comments: initialComments } =
        useLoaderData();
    // We use the hooks to update our data from our upvoting button and new comment form
    const [upvotes, setUpvotes] = useState(initialUpvotes);
    const [comments, setComments] = useState(initialComments);

    // We use our custom useUser hook to get the loading status and the user info
    // eslint-disable-next-line no-unused-vars
    const { isLoading, user } = useUser();

    // We use the name (article's unique ID) to find the corresponding article in our article-content
    const article = articles.find((article) => article.name === name);

    /*
     ** Function to make the upvote request when the button is clicked
     ** - We get the user info and its id auth token
     ** - We specify headers for our request to include the auth token
     ** - We use the axios library to send the post request to our server.
     ** - We get back the server responce with the updated article data
     ** - We update our upvotes (the upvotes state) for our frontent to display
     */
    async function onUpvoteClicked() {
        const token = user && (await user.getIdToken());
        // the user's auth token or empty if user hasn't an auth token
        const headers = token ? { authtoken: token } : {};
        // we make the request. null is for the request's body
        const responce = await axios.post(
            "/api/articles/" + name + "/upvote",
            null,
            { headers }
        );
        const updatedArticleData = responce.data;
        setUpvotes(updatedArticleData.upvotes);
    }
    /*
     ** Function to make the comment request when a comment is added
     ** - We get the user info and its id auth token
     ** - We specify headers for our request to include the auth token
     ** - We use the axios library to send the post request to our server
     **   with a body of the comment poster and the comment text.
     ** - We get back the server responce with the updated article data.
     ** - We update our comments (the comments state) for our frontent to display.
     */
    async function onAddComment({ nameText, commentText }) {
        const token = user && (await user.getIdToken());
        // the user's auth token or empty if user hasn't an auth token
        const headers = token ? { authtoken: token } : {};
        // we make the request
        const responce = await axios.post(
            "/api/articles/" + name + "/comments",
            {
                postedBy: nameText,
                text: commentText,
            },
            { headers }
        );
        const updatedArticleData = responce.data;
        setComments(updatedArticleData.comments);
    }

    // We return the article we got from the name URL Parameter
    // along with an upvoting button, an add comment form (for authenticated users) and the article comments
    return (
        // we wrap everything we return in a React Fragment
        // key --> makes it easy for React to rerender the list
        <>
            <h1>{article.title}</h1>
            {user && <button onClick={onUpvoteClicked}>Upvote</button>}
            {<p>This article has {upvotes} upvotes!</p>}
            {article.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
            ))}
            {user ? (
                <AddCommentForm onAddComment={onAddComment} />
            ) : (
                <p>Sign in to add a comment</p>
            )}
            <CommentsList comments={comments} />
        </>
    );
};

// Our loader function to use in App.jsx routes for sercer requests
// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
    const response = await axios.get("/api/articles/" + params.name);
    const { upvotes, comments } = response.data;
    return { upvotes, comments };
}

export default ArticlePage;
