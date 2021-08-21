import React from 'react';
import Filter from './Filter';

const Checkbox = ({ filterByList }) => {
  return (
    <React.Fragment>
      {filterByList.map((filter) => (
        <Filter key={filter} filter={filter} />
      ))}
    </React.Fragment>
  );
};

export default Checkbox;
