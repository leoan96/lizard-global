import React from 'react';

const Filter = ({ filter }) => {
  return (
    <p>
      <label>
        <input type="checkbox" className="filled-in" />
        <span>{filter}</span>
      </label>
    </p>
  );
};

export default Filter;
