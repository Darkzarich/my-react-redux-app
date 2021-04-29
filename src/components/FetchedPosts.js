import React from 'react';
import Post from './Post';

const FetchedPosts = ({ posts }) => {
  if (!posts.length) {
    return <button className="btn btn-primary">Download</button>;
  }

  return posts.map((post, index) => <Post key={index} post={post} />);
};

export default FetchedPosts;
