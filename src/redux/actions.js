import { CREATE_POST } from './actionTypes';

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}