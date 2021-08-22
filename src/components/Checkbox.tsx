import React from 'react';
import Filter from './Filter';

interface FilterList {
  filterByList: string[];
}

const Checkbox = ({ filterByList }: FilterList) => {
  return (
    <React.Fragment>
      {filterByList.map((filter: string) => (
        <Filter key={filter} filter={filter} />
      ))}
    </React.Fragment>
  );
};

export default Checkbox;
