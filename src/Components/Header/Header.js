import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="container-auto bg-indigo-900 text-neutral-200 font-bold p-3 flex gap-x-20 justify-end">
      <Link to="/">Home</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/statistic">Statistic</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
};

export default Header;