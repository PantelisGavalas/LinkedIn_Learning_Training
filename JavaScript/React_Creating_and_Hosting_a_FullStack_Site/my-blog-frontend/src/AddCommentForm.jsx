/* eslint-disable react/prop-types */
import { useState } from "react";

/*
 ** Form component for our article comments.
 **  - We have a form with name and comment inputs and a button
 **  - On click of the button we call our passed prop method
 **    defined in our ArticlePage.jsx file
 **    (it sends post comment request to our server)
 */
const AddCommentForm = ({ onAddComment }) => {
    const [nameText, setNameText] = useState("");
    const [commentText, setCommentText] = useState("");

    return (
        <div>
            <h3>Add a comment:</h3>
            <label>
                Name:
                <input
                    type="text"
                    value={nameText}
                    onChange={(e) => setNameText(e.target.value)}
                />
            </label>
            <label>
                Comment:
                <input
                    type="text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                />
            </label>
            <button
                onClick={() => {
                    onAddComment({ nameText, commentText });
                    // reset the input fields after comment is added
                    setNameText("");
                    setCommentText("");
                }}
            >
                Add Comment
            </button>
        </div>
    );
};

export default AddCommentForm;
