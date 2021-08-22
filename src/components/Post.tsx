import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../shared/helper';

interface Category {
  id: string;
  name: string;
}

export interface PostDetails {
  author: { name: string; avatar: string };
  title: string;
  publishDate: string;
  id: string;
  summary?: string;
  categories?: Category[];
}

const Post = ({ post }: { post: PostDetails }) => {
  return (
    <div>
      <li className="collection-item avatar">
        <img src={post.author.avatar} alt="" className="circle" />
        <span className="title">{post.title}</span>
        <p>{post.author.name}</p>
        <p>{formatDate(post.publishDate)}</p>
        <Link to={`/posts/${post.id}`} className="secondary-content">
          <i>View Details</i>
          <i className="small material-icons">forum</i>
        </Link>
      </li>
    </div>
  );
};

export default Post;
