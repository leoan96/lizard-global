import React from 'react';

const Pagination = ({
  currentPage,
  postsPerPage,
  totalPosts,
  paginate,
  paginateLeft,
  paginateRight,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const lastPage = pageNumbers[pageNumbers.length - 1];

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="pagination">
            <li className="disabled">
              <a href="#!" onClick={paginateLeft}>
                <i className="material-icons">chevron_left</i>
              </a>
            </li>
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`waves-effect ${
                  currentPage === number ? 'active' : ''
                }`}
              >
                <a
                  onClick={() => paginate(number)}
                  href="#!"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            ))}
            <li className="waves-effect">
              <a href="#!" onClick={() => paginateRight(lastPage)}>
                <i className="material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
