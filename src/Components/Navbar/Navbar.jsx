import React from "react";

const Navbar = () => {
  return (
    <div className="navbar gap-10 container mx-auto max-w-7xl">
      <div className="navbar-start">
        <a className="text-3xl lg:text-4xl font-black uppercase">
          <span className="text-[#165831]">Ridge</span>
          <span className="text-[#949293] ml-1 lg:ml-2">Street</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 text-base lg:text-xl items-center">
          <li>
            <a>Fix and Flip</a>
          </li>
          <li>
            <a>Rental Loans</a>
          </li>
          <li>
            <a>Where We Lend</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Resources</a>
          </li>
          <li>
            <a className="btn bg-[#165831] text-white px-4 py-2 text-sm lg:text-base shadow-lg rounded-lg">
              Get Approved Online
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-56 text-base"
          >
            <li>
              <a>Fix and Flip</a>
            </li>
            <li>
              <a>Rental Loans</a>
            </li>
            <li>
              <a>Where We Lend</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Resources</a>
            </li>
            <li>
              <a className="btn bg-[#165831] text-white mt-2 text-sm shadow-lg rounded-lg">
                Get Approved
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
