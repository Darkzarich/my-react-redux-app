import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h2 className="card-title">Title here {post} </h2>
      </div>
    </div>
  );
};

export default Post;
