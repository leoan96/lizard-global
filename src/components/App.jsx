import React, { useState, useEffect } from 'react';

const App = () => {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((json) => {
        console.log(json.posts);
        setPosts(json.posts);
      });
  }, []);

  return <div></div>;
};

export default App;
