import React from "react";
import { Link } from "react-router-dom";

const Topics = (props) => {
  const {id,name,logo,total} = props.topic;
  console.log('id',id)
  return (
    <div className="text-neutral-200 bg-gradient-to-r from-cyan-500 to-blue-500 h-64 w-60 rounded p-5 hover:mix-blend-multiply bg-pink-400">
      <img className="w-40 h-40" src={logo} alt="" />
      <div className="flex justify-between">
        <h1>{name}</h1>
        <p>total: {total}</p>
      </div>
      <p className="flex justify-center">
        <Link
          to={`/topic/${id}`}
          className="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 rounded hover:bg-indigo-900"
        >
          Start Quiz
        </Link>
      </p>
    </div>
  );
};

export default Topics;
