import React from 'react';
import FeaturedArticles from './FeaturedArticles';
import { connect } from "react-redux";
import {selectArticle} from "../actions/news_actions";
import { useHistory } from "react-router-dom";

const FeaturedNews = ({articles,selectArticle}) => {
    let history = useHistory();
    const openSelectedArticle = (article)=>
  {
    selectArticle(article);
    const title = encodeURIComponent(article.title);
    history.push(`/news/${title}`);
  }
    return (
        articles.map((item,index)=>{

           return  <FeaturedArticles article ={item} key={index} openSelectedArticle={openSelectedArticle}/>
        }
    ))
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {selectArticle};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedNews);