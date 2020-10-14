import React, { Component } from "react";
import { connect } from "react-redux";
import AppBar from "../components/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TopNews from "../components/TopNews";
import { fetchArticles } from "../actions/news_actions";
import FeaturedNews from "../components/FeaturedNews";
import TrendingNews from "../components/TrendingNews";
import Skeltons from "../UI/Skeltons";
import InfiniteScroll from 'react-infinite-scroll-component';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  appBarSpacer: theme.mixins.toolbar,
}));

export const DashBoard = ({
  error,
  loading,
  articles,
  selectedArticle,
  selectedSection,
  fetchArticles,
}) => {
  React.useEffect(() => {
    document.title = "new title"
    fetchArticles("general");
  }, []);
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ maxWidth: "none" }}>
        <div className={classes.appBarSpacer} />
        <main>
          <Grid container spacing={4}>
            {loading &&
              Array.from(new Array(15)).map((item, index) => {
                return <Skeltons />;
              })}

            {!loading && (
              <React.Fragment>
                <Grid item xs={12} md={6}>
                  <TopNews article={articles[0]} />
                  <FeaturedNews articles={[articles[1]]} />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FeaturedNews articles={articles.slice(2, 4)} />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TrendingNews articles={articles.slice(5, 9)} />
                </Grid>
              </React.Fragment>
            )}
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  loading: state.news.loading,
  error: state.news.error,
  selectedArticle: state.news.selectedArticle,
  selectedSection: state.news.selectedSection,
  articles: state.news.articles,
});

const mapDispatchToProps = {
  fetchArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
