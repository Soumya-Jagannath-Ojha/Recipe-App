import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/Context";

const NavBar = () => {

  const {searchParam,setSearchParam, handleSubmit} = useContext(GlobalContext);
  // console.log(searchParam);
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h1 className="text-2xl font-extrabold text-purple-600 ">
      <NavLink
            to={"/"}
          >
            FoodReceipe
          </NavLink>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
          id=""
        />
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
  );
};

export default NavBar;
