/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// This component lists all articles it gets in its props.
// Returns their title with a sample of 150 characters.
const ArticlesList = ({ articles }) => {
    return (
        <>
            {articles.map((article) => (
                <Link key={article.name} to={"/articles/" + article.name}>
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}</p>
                </Link>
            ))}
        </>
    );
};

export default ArticlesList;
