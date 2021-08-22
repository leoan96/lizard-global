import React from 'react';

interface Filter {
  filter: string;
}

const Filter = ({ filter }: Filter) => {
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
