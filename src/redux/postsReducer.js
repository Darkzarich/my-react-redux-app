import { CREATE_POST } from './actionTypes';

const initialState = {
  posts: [],
  fetchedPosts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
  }
};
