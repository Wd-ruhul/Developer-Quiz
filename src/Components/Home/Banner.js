import React from 'react';

const Banner = () => {
  return (
    <div className="h-48 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-5">
      <h2 className="text-neutral-200 font-bold text-center text-4xl font-sans	">
        Developer Quiz
      </h2>
      <p className="text-neutral-200 font-bold text-center text-2xl font-sans">
        {" "}
        Prove Your Self
      </p>
    </div>
  );
};

export default Banner;