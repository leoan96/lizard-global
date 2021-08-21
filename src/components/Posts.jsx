import React from 'react';

import Post from './Post';

const Posts = ({ posts }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <ul className="collection">
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
