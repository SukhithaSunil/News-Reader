import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useHistory } from "react-router-dom";
import {selectArticle} from "../actions/news_actions";



const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: 400,
  },
}));

export const TopNews = ({ article,selectArticle }) => {
  const classes = useStyles();
  const history = useHistory();
  const openSelectedArticle = (article)=>
  {
    selectArticle(article);
    const title = encodeURIComponent(article.title);
    history.push(`/news/${title}`);
  }
  return (
    <Card >
      <CardActionArea component="Link" onClick={()=>openSelectedArticle(article)}>
        <CardMedia
          className={classes.cardMedia}
          image={article.urlToImage}
          title={article.title}
        />
        <CardContent>
        <Typography gutterBottom variant="body2" component="h2">
            {article.date}
          </Typography>
          <Typography gutterBottom variant="h4" component="h2">
            {article.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link
            rel="nooliener noreferrer"
            href={article.url}
            target="_blank"
            component="a"
            variant="subtitle1"
            color="primary"
          >
            Learn More
          </Link>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {selectArticle};

export default connect(mapStateToProps, mapDispatchToProps)(TopNews);
