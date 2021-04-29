import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="card-title">
          <span className="text-muted small">[{post.id}]</span> {post.title}
        </div>
      </div>
    </div>
  );
};

export default Post;
