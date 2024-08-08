import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/Context";

const NavBar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <div>
      <nav className="nav flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h1 className="text-2xl font-extrabold text-black ">
          <NavLink to={"/"}>FoodRecipe</NavLink>
        </h1>
        <form onSubmit={handleSubmit}>
          

          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                width="14px"
                height="14px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-80 border
               border-slate-300 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none
                focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Enter item..."
              type="text"
              name="search"
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
            />
          </label>
        </form>
        <ul className="flex gap-5">
          <li>
            <NavLink
              to={"/"}
              className="text-black hover:text-gray-700 duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorites"}
              className="text-black hover:text-gray-700 duration-300"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
