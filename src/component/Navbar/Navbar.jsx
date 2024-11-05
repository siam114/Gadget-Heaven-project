import React from "react";
import image from '../../assets/cart.png';
import heartImg from '../../assets/heart.png'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li className="text-lg"><NavLink  to="/" style={({ isActive }) => ({
                    background: isActive ? '#E5E7EB' : 'transparent',
                    color: isActive ? '#1F2937' : '#4B5563'
                })}>Home</NavLink></li>
        <li className="text-lg "><NavLink to="/statistic" style={({ isActive }) => ({
                    background: isActive ? '#E5E7EB' : 'transparent',
                    color: isActive ? '#1F2937' : '#4B5563'
                })}>Statistics</NavLink></li>
        <li className="text-lg "><NavLink to="/dashboard" style={({ isActive }) => ({
                    background: isActive ? '#E5E7EB' : 'transparent',
                    color: isActive ? '#1F2937' : '#4B5563'
                })}>Dashboard</NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="w-10 h-10 border mr-2 p-1 rounded-full"><img src={image} alt="" /></a>
        <a className="w-9 h-9 border p-1 rounded-full"><img src={heartImg} alt="" /></a>
      </div>
    </div>
  );
};

export default Navbar;
