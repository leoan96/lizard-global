import React from 'react';

const Filter = ({ filter }) => {
  return (
    <p>
      <label htmlFor={filter}>
        <input
          type="checkbox"
          id={filter}
          className="filled-in"
          name={filter}
          value={filter}
        />
        <span>{filter}</span>
      </label>
    </p>
  );
};

export default Filter;
