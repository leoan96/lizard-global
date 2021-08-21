import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import Pagination from './Pagination';
import PostDetails from './PostDetails';
import Posts from './Posts';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filterByList, setFilterByList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    fetch('/api/posts')
      .then((response) => response.json())
      .then((json) => {
        const posts = json.posts;
        const filtersSet = new Set();

        posts.forEach((post) => getFilters(post.categories, filtersSet));

        const filters = Array.from(filtersSet);

        setFilterByList(filters);
        setPosts(posts);
        setLoading(false);
      });
  }, []);

  const getFilters = (categories, filters) => {
    categories.forEach((category) => filters.add(category.name));
  };

  const handleOnFilterSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

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
      <Navbar
        filterByList={filterByList}
        onFilterSubmit={handleOnFilterSubmit}
      />
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
