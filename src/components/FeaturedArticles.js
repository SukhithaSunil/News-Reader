import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({

  cardMedia: {
    height: 250,
  },
}));

export const FeaturedArticle = ({ article, openSelectedArticle }) => {
  const classes = useStyles();

  return (
    <Card style={{ marginBottom: "28px" }}>
      <CardActionArea
        component="a"
        onClick={() => openSelectedArticle(article)}
      >
        <CardMedia
          className={classes.cardMedia}
          image={article.urlToImage}
          title={article.title}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" color="textSecondary">
            {article.date}
          </Typography>
          <Typography gutterBottom component="h2" variant="h5">
            {article.title}
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

export default FeaturedArticle;
