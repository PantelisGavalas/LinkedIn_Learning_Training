import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccountPage = () => {
    // state variables to keep track of email password and confirm password inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // state variable for possible error during account creation
    const [error, setError] = useState("");

    // variable to use to navigate the user on successfull page creation
    const navigate = useNavigate();

    // Our button onClick function to create account for the user with Firebase Auth
    async function createAccount() {
        // make sure password and confirm password are the same
        if (password !== confirmPassword) {
            setError("Password and Confirm Password do not match!");
            return;
        }
        try {
            // sends request to Firebase Auth to try and create account
            // for the user with the given email and password
            // getAuth -> gives reference to the Firebase Auth instance
            await createUserWithEmailAndPassword(getAuth(), email, password);
            // if login is successfull --> send user to articles list page
            navigate("/articles");
        } catch (e) {
            // if creating account fails we set the error state to the error we caught
            setError(e.message);
        }
    }

    /* We display:
     ** - if there is an error --> we display this error in a paragraph tag
     ** - email & password & confirm password inputs, button for creating account, link to LoginPage
     */
    return (
        <>
            <h1> Create Account</h1>
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
            <input
                type="password"
                placeholder="Confirm your password..."
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={createAccount}>Create Account</button>
            <Link to="/login">Already have an ccount? Log in here!</Link>
        </>
    );
};

export default CreateAccountPage;
