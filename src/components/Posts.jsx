import React from 'react';

import Post from './Post';
import Spinner from './Spinner';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <Spinner />;
  }

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
