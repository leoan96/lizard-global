import React from 'react';
import { Link } from 'react-router-dom';
import Checkbox from './Checkbox';

const Navbar = ({ filterByList, onFilterSubmit }) => {
  return (
    <React.Fragment>
      <nav>
        <div className="nav-wrapper container">
          <Link to={'/'} className="brand-logo">
            Lizard Blog
          </Link>
        </div>
        <form action="#">
          <label>
            <h4>Filter By:</h4>
          </label>

          <Checkbox filterByList={filterByList} />
          <p>
            <input type="submit" value="Submit" onClick={onFilterSubmit} />
          </p>
        </form>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
