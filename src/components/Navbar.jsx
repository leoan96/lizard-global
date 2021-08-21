import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper container">
        <Link to={'/'} className="brand-logo">
          Lizard Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
