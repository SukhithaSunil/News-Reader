import React from "react";
import TrendingArticle from "./TrendingArticle";
import { connect } from "react-redux";
import { selectArticle } from "../actions/news_actions";
import { useHistory } from "react-router-dom";

const TrendingNews = ({ articles, selectArticle }) => {
  let history = useHistory();
  const openSelectedArticle = (article) => {
    selectArticle(article);
    const title = encodeURIComponent(article.title);
    history.push(`/news/${title}`);
  };
  return articles.map((item, index) => {
    return (
      <TrendingArticle
        article={item}
        key={index}
        openSelectedArticle={openSelectedArticle}
      />
    );
  });
};


const mapDispatchToProps = { selectArticle };

export default connect(null, mapDispatchToProps)(TrendingNews);
