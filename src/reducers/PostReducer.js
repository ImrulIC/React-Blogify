import { actions } from "../actions";

const PostInitialState = {
  posts: [],
  popular: [],
  loading: false,
  error: null,
};

const PostReducer = (state, action) => {
  switch (action.type) {
    case actions.post.DATA_FETCHING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.post.DATA_FETCHED:
      return {
        ...state,
        loading: false,
        posts: action.posts,
        error: null,
      };

    case actions.post.DATA_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.error,
      };

    case actions.post.DATA_FETCH_POPULAR:
      return {
        ...state,
        loading: false,
        popular: action.popular,
      };
  }
};

export { PostInitialState, PostReducer };
