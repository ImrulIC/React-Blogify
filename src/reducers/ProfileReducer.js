import { actions } from "../actions";

const ProfileInitialState = {
  loading: false,
  user: null,
  favorites: null,
  error: null,
};

const ProfileReducer = (state, action) => {
  switch (action.type) {
    case actions.profile.DATA_FETCHING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.profile.DATA_FETCHED:
      return {
        ...state,
        loading: false,
        user: action.user,
        favorites: action.favorites,
        error: null,
      };

    case actions.profile.DATA_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        user: null,
        favorites: null,
        error: action.error,
      };

    case actions.profile.DATA_FETCH_FAVORITES:
      return {
        ...state,
        loading: false,
        favorites: action.favorites,
      };
  }
};

export { ProfileInitialState, ProfileReducer };
