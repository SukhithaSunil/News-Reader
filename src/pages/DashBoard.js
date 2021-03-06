import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TopNews from "../components/TopNews";
import { fetchArticles } from "../actions/news_actions";
import FeaturedNews from "../components/FeaturedNews";
import TrendingNews from "../components/TrendingNews";
import Skeltons from "../UI/Skeltons";
import InfiniteScroll from "react-infinite-scroll-component";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

export const DashBoard = ({ loading, articles, fetchArticles , error}) => {
  const [shownArticles, setShownArticles] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(true);

  const fetchMoreData = () => {

    if (shownArticles.length >= articles.length - 8) {
      setHasMore(false);
      return;
    }

    setShownArticles(shownArticles.concat(articles.splice(8, 10)));

  };

  React.useEffect(() => {
    document.title = "NewsHub";
    fetchArticles("general");
    setShownArticles(articles.splice(7, articles.length));
  }, []);
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ maxWidth: "none" }}>
        <div className={classes.appBarSpacer} />
        <main>
          <Grid container spacing={4}>
            {error&&
            <Typography
            gutterBottom
            variant="h4"
            component="h2"
            align="center"
            noWrap
          >
            Loading
          </Typography>
            }
            {loading &&
              Array.from(new Array(15)).map(() => {
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

            <InfiniteScroll
              dataLength={shownArticles.length}
              next={fetchMoreData}
              hasMore={hasMore}
              scrollThreshold="200px"
              loader={
                <div style={{ height: "100px" }}>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="h2"
                    align="center"
                    noWrap
                  >
                    Loading
                  </Typography>
                </div>
              }
              endMessage={
                <Grid item xs={12} md={12}>
                  <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                </Grid>
              }
            >
              <Grid container spacing={4}>
                {shownArticles.map((i) => (
                  <Grid item xs={12} md={4}>
                    <TopNews article={i} />
                  </Grid>
                ))}
              </Grid>
            </InfiniteScroll>
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
