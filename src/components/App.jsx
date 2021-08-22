import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import Pagination from './Pagination';
import PostDetails from './PostDetails';
import Posts from './Posts';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filterByList, setFilterByList] = useState([]);
  const [filterBy, setFilterBy] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const initializeMainPage = () => {
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
  };

  useEffect(() => {
    setLoading(true);
    initializeMainPage();
  }, []);

  useEffect(() => {
    setPosts(filter());
  }, [filterBy]);

  // Extracting unique filter values from data
  const getFilters = (categories, filters) => {
    categories.forEach((category) => filters.add(category.name));
  };

  // Implement filter functionality
  const handleOnFilterSubmit = (e) => {
    e.preventDefault();
    const filters = [];

    Array.from(e.target.elements).forEach((input) => {
      if (input.type === 'checkbox' && input.checked) {
        filters.push(input.value);
      }
    });

    setFilterBy(filters);
  };

  const filter = () => {
    const categories = posts.filter((post) => {
      for (const category of post.categories) {
        if (filterBy.includes(category.name)) {
          return true;
        }
      }
      return false;
    });

    return categories;
  };

  const handleOnReset = () => initializeMainPage();

  // Pagination
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

  console.log(filterBy);
  return (
    <div>
      <Navbar
        filterByList={filterByList}
        handleOnFilterSubmit={handleOnFilterSubmit}
        handleOnReset={handleOnReset}
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
