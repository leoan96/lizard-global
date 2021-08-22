import React from 'react';

const Badge = ({ name }: { name: string }) => {
  return <span className="badge yellow">{name}</span>;
};

export default Badge;
