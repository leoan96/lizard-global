import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import Pagination from './Pagination';
import PostDetails from './PostDetails';
import Posts from './Posts';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    fetch('/api/posts')
      .then((response) => response.json())
      .then((json) => {
        setPosts(json.posts);
        setLoading(false);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const paginateLeft = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginateRight = (lastPage) => {
    if (currentPage + 1 <= lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={['/', 'posts']}>
          <Posts posts={currentPosts} loading={loading} />
          <Pagination
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            paginateLeft={paginateLeft}
            paginateRight={paginateRight}
          />
        </Route>
        <Route exact path="/posts/:id" component={PostDetails} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
