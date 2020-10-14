import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from "@material-ui/core/Link";
import CardActions from "@material-ui/core/CardActions";
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: "34%"
  },
});

export default function TrendingArticle({article,openSelectedArticle}) {
  const classes = useStyles();

  return (
    
    <CardActionArea component="a"onClick={()=>openSelectedArticle(article)} style={{marginBottom: "28px"}} >
    <Card className={classes.card}>
      <div className={classes.cardDetails}>
        <CardContent>
          <Typography  variant="h6" component="h2" gutterBottom>
            {article.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {article.date}
          </Typography>
          
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
        </CardContent>
      </div>
      <Hidden xsDown>
        <CardMedia className={classes.cardMedia} image={article.urlToImage} title={article.name} />
      </Hidden>
    </Card>
  </CardActionArea>
     
   
  );
}

