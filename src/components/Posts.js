import React from 'react';
import Post from './Post';

const Posts = ({ posts }) => {
  if (!posts.length) {
    return <p className="text-center">No posts</p>;
  }

  return posts.map((post, index) => <Post key={index} post={post} />);
};

export default Posts;
