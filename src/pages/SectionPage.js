import React from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../actions/news_actions";
import Grid from "@material-ui/core/Grid";
import FeaturedNews from "../components/FeaturedNews";
import TrendingNews from "../components/TrendingNews";
import TopNews from "../components/TopNews";
import Container from "@material-ui/core/Container";
import Skeltons from "../UI/Skeltons";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));
export const SectionPage = (props) => {
  let category = props.location.pathname;
  category = category.substring(category.lastIndexOf("/") + 1);

  React.useEffect(() => {
    document.title = category.concat(" News");
    props.fetchArticles(category);
  }, [category]);
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ maxWidth: "none" }}>
        <div className={classes.appBarSpacer} />

        <Grid container spacing={4}>
          {props.loading &&
            Array.from(new Array(15)).map(() => {
              return <Skeltons />;
            })}
          {!props.loading && (
            <React.Fragment>
              <Grid item xs={12} md={6}>
                <TopNews article={props.articles[0]} />
                <FeaturedNews articles={[props.articles[1]]} />
              </Grid>
              <Grid item xs={12} md={3}>
                <FeaturedNews articles={props.articles.slice(2, 4)} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TrendingNews articles={props.articles.slice(5, 9)} />
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  articles: state.news.articles,
  loading: state.news.loading,
});

const mapDispatchToProps = {
  fetchArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionPage);
