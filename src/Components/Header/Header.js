import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-indigo-900 text-neutral-200  font-bold p-5 border-b border-amber-400  ">
      <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
      <ul
        className={` w-full bg-indigo-900  md:flex md:gap-x-20 md:justify-end md:static  justify-center absolute duration-500 ease-in ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        <li className=''>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-amber-400" : undefined
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-amber-400" : undefined
            }
            to="/topics"
          >
            Topics
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-amber-400" : undefined
            }
            to="/statistic"
          >
            Statistic
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-amber-400" : undefined
            }
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;