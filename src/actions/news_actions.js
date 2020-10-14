export const ARTICLES_LOADING = "ARTICLES_LOADING";
export const ARTICLES_FAILED = "ARTICLES_FAILED";
export const ADD_ARTICLES = "ADD_ARTICLES";
export const ADD_SECTION_ARTICLES = "ADD_SECTION_ARTICLES";
export const SELECT_SECTION = "SELECT_SECTION";
export const SELECT_ARTICLE = "SELECT_ARTICLE";



export const articlesLoading = () => ({
    type: ARTICLES_LOADING
  });
  
  export const articlesFailed = error => ({
    type: ARTICLES_FAILED,
     error
  });
  
  export const addArticles = articles => ({
    type: ADD_ARTICLES,
    articles
  });
  export const selectSection = section => ({
    type: SELECT_SECTION,
    section
  });
  export const selectArticle = article => ({
    type: SELECT_ARTICLE,
    article
  });

  async function getArticles(category) {
    var url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=20&category=${category}`;
    var bearer = 'fbc947776aa74c4dacefab6e2e5e54e0';
    var filteredData;
    await fetch(url
      , {
      method: 'GET',
      withCredentials: true,
      headers: {
          'X-Api-Key': bearer,
      }
  }
  
  ).then((response) => response.json())
      .then((data) => {
        var items = JSON.parse(JSON.stringify(data)).articles;
        console.log(items);
         filteredData =items.map((item) => {
            var article = {title:item.title,url:item.url, urlToImage:item.urlToImage,description:item.description,
                date:item.publishedAt,content:item.content,source:item.source.name}
          return article;
        });
      });
      console.log(filteredData);
    return filteredData;
  }
export const fetchArticles = (category) => async dispatch => {
    dispatch(articlesLoading());
    try {
      const userDetails = await getArticles(category)
      dispatch(addArticles(userDetails))
    } catch (err) {
      dispatch(articlesFailed(err.toString()))
    }
  }