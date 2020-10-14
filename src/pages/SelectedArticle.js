import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },

  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    height: 400,
  },
}));

const SelectedArticle = ({ selectedArticle }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <Card>
      <CardContent>
        <Typography gutterBottom variant="h3" component="h2">
          {selectedArticle.title}
        </Typography>
        <Divider />
        <Typography gutterBottom variant="body2" component="h2">
          {selectedArticle.date}
        </Typography>
        <Typography gutterBottom variant="body2" component="h2">
          {selectedArticle.source}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {selectedArticle.description}
        </Typography>
        <Divider />
      </CardContent>
      <CardMedia
        className={classes.cardMedia}
        image={selectedArticle.urlToImage}
        title={selectedArticle.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" >
          {selectedArticle.content}
        </Typography>
      </CardContent>

      <CardActions>
        <Link
          rel="nooliener noreferrer"
          href={selectedArticle.url}
          target="_blank"
          component="a"
          variant="subtitle1"
          color="primary"
        >
          Learn More
        </Link>
      </CardActions>
    </Card>
      </Container>
    </React.Fragment>
    
  );
};

const mapStateToProps = (state) => ({
  selectedArticle: state.news.selectedArticle
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedArticle);