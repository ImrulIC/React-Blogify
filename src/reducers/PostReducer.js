import { actions } from "../actions";

const initialState = {
  posts: [],
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
  }
};

export { initialState, PostReducer };
