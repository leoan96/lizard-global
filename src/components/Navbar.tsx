import React from 'react';
import { Link } from 'react-router-dom';
import Checkbox from './Checkbox';

interface NavProp {
  filterByList: string[];
  handleOnFilterSubmit: () => void;
  handleOnReset: () => void;
}

const Navbar = ({
  filterByList,
  handleOnFilterSubmit,
  handleOnReset,
}: NavProp) => {
  return (
    <React.Fragment>
      <nav>
        <div className="nav-wrapper container">
          <Link to={'/'} className="brand-logo">
            Lizard Blog
          </Link>
        </div>
        <form onSubmit={handleOnFilterSubmit} id="filterForm">
          <label>
            <h4>Filter By:</h4>
          </label>
          <Checkbox filterByList={filterByList} />
          <p>
            <button className="waves-effect waves-light btn" type="submit">
              Filter
            </button>
            <button
              onClick={handleOnReset}
              className="waves-effect #d50000 red accent-4 btn"
            >
              Reset
            </button>
          </p>
        </form>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
