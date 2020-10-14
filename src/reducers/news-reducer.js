import * as actions from "../actions/news_actions";

const initialState = {
  selectedArticle: {},
  loading: true,
  error: null,
  articles: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ARTICLES_LOADING:
      return { ...state, loading: true };
    case actions.ARTICLES_FAILED:
      return { ...state, loading: false, error: action.error };
    case actions.ADD_ARTICLES:
      return {
        ...state,
        articles: [].concat(action.articles),
        loading: false,
        error: null,
      };
    case actions.SELECT_ARTICLE:
      return { ...state, selectedArticle: action.article };

    default:
      return state;
  }
};
