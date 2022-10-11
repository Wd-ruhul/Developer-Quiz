import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-indigo-900 text-neutral-200 font-bold p-3  ">
      <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
      <ul
        className={` w-full bg-indigo-900  md:flex md:gap-x-20 md:justify-end md:static  justify-center absolute duration-500 ease-in ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/statistic">Statistic</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;