import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
    // state variables to keep track of email and password inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // state variable for possible error during log in
    const [error, setError] = useState("");

    // variable to use to navigate the user on successfull login
    const navigate = useNavigate();

    // Our button onClick function to log in the user with Firebase Auth
    async function logIn() {
        try {
            // sends request to Firebase Auth to try and authenticate
            // the user with the given email and password
            await signInWithEmailAndPassword(getAuth(), email, password);
            // if login is successfull --> send user to articles list page
            navigate("/articles");
        } catch (e) {
            // if login fails we set the error state to the error we caught
            setError(e.message);
        }
    }

    /* We display:
     ** - if there is an error --> we display this error in a paragraph tag
     ** - email & password inputs, button for login, link to CreateAccountPage
     */
    return (
        <>
            <h1> Log in</h1>
            {error && <p>{error}</p>}
            <input
                placeholder="Your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={logIn}>Log In</button>
            <Link to="/create-account">
                Don&apos;t have an account? Create one here!
            </Link>
        </>
    );
};

export default LoginPage;
