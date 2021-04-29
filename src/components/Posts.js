import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className="text-center">No posts</p>;
  }

  return syncPosts.map((post, index) => <Post key={index} post={post} />);
};

const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
