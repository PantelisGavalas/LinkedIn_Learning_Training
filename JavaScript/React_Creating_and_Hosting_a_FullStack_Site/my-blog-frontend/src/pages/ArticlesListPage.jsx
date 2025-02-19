import articles from "../article-content";
import ArticlesList from "../ArticlesList";

const ArticlesListPage = () => {
    // return the ArticlesList component passing all articles to it.
    // It lists all articles it gets passed in.
    return (
        <>
            <h1> Articles</h1>
            <ArticlesList articles={articles} />
        </>
    );
};

export default ArticlesListPage;
