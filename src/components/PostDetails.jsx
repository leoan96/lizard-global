import React, { useState, useEffect } from 'react';
import { formatDate } from '../shared/helper';

import Badge from './Badge';

const PostDetails = (props) => {
  const initialPostState = {
    id: null,
    title: '',
    publishDate: '',
    author: '',
    summary: '',
    categories: '',
  };
  const [post, setPost] = useState(initialPostState);

  const postId = props.match.params.id;

  const getPost = async (id) => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((json) => {
        const post = json.posts.filter((post) => post.id === id);
        setPost(post[0]);
      });
  };

  useEffect(() => {
    getPost(postId);
  }, [postId]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h2 className="header">{post.title}</h2>
            <div className="card horizontal medium">
              <div className="card-image">
                <img src={post.author.avatar} className="responsive-img" />
                <span style={{ fontWeight: 'bold', fontSize: 20 }}>
                  {post.author.name}
                </span>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>{post.summary}</p>
                </div>
                <div className="card-action">
                  <div className="card-content">
                    {post?.categories
                      ? post.categories.map((category, index) => (
                          <Badge key={index} name={category.name} />
                        ))
                      : ''}
                  </div>
                  <span>Publish Date: {formatDate(post.publishDate)}</span>
                  <p>ID: {post.id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
