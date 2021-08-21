import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import PostDetails from './PostDetails';
import Posts from './Posts';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/posts')
      .then((response) => response.json())
      .then((json) => {
        console.log(json.posts);
        setPosts(json.posts);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={['/', 'posts']}>
          <Posts posts={posts} loading={loading} />
        </Route>
        <Route exact path="/posts/:id" component={PostDetails} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
