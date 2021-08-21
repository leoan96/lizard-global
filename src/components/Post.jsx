import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const formatDate = (string) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  };

  return (
    <div>
      <li className="collection-item avatar">
        <img src={post.author.avatar} alt="" className="circle" />
        <span className="title">{post.title}</span>
        <p>{post.author.name}</p>
        <p>{formatDate(post.publishDate)}</p>
        <Link to={`/posts/${post.id}`} className="secondary-content">
          <i className="material-icons">View Details</i>
        </Link>
      </li>
    </div>
  );
};

export default Post;
