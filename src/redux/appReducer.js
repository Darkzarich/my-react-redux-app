import { SHOW_LOADER, HIDE_LOADER } from './actionTypes';

const initialState = {
  loading: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADER:
      return { ...state, loading: false };
  }
};
