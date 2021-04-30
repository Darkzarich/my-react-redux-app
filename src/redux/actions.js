import axios from 'axios';
import {
  CREATE_POST,
  FETCH_POSTS,
  HIDE_LOADER,
  SHOW_LOADER,
} from './actionTypes';

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPosts() {
  return async (dispatch) => {
    dispatch({ type: SHOW_LOADER });
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
    dispatch({ type: FETCH_POSTS, payload: response.data });
    dispatch({ type: HIDE_LOADER });
  };
}
