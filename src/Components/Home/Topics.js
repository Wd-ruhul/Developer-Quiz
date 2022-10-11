import React from 'react';

const Topics = ({topic}) => {
  const { name, logo, total } = topic;
  return (
    <div>
      <img className='w-44 h-44' src={logo} alt="" />
      <h1>{name}</h1>
      <p>total: { total}</p>
    </div>
  );
};

export default Topics;