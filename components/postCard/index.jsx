import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="p-4 shadow-lg">
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
    </div>
  );
};

export default PostCard;
