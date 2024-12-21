import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/Context";
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import {
  BellIcon,
  Cog6ToothIcon,
  ShoppingCartIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

const NavBar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // <div>
    //   <nav className="nav flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
    //     {/* Logo */}
    //     <h1 className="text-2xl font-extrabold text-black">
    //       <NavLink to={"/"}>FoodRecipe</NavLink>
    //     </h1>

    //     {/* Search Form - Always Visible */}
    //     <form onSubmit={handleSubmit} className="order-last lg:order-none">
    //       <label className="relative block">
    //         <span className="sr-only">Search</span>
    //         <span className="absolute inset-y-0 left-0 flex items-center pl-2">
    //           <svg
    //             width="14px"
    //             height="14px"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
    //               stroke="#000000"
    //               strokeWidth="2"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             ></path>
    //           </svg>
    //         </span>
    //         <input
    //           className="placeholder:italic placeholder:text-slate-400 block bg-white w-80 border
    //            border-slate-300 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none
    //             focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
    //           placeholder="Enter item..."
    //           type="text"
    //           name="search"
    //           value={searchParam}
    //           onChange={(e) => setSearchParam(e.target.value)}
    //         />
    //       </label>
    //     </form>

    //     {/* Hamburger Menu Button */}
    //     <button
    //       className="lg:hidden block text-black focus:outline-none order-last"
    //       onClick={toggleMenu}
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-6 w-6"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           d="M4 6h16M4 12h16m-7 6h7"
    //         />
    //       </svg>
    //     </button>

    //     {/* Navigation Links */}
    //     <ul
    //       className={`${
    //         isMenuOpen ? "flex" : "hidden"
    //       } lg:flex gap-5 flex-col lg:flex-row items-center`}
    //     >
    //       <li>
    //         <NavLink
    //           to={"/"}
    //           className="text-black hover:text-gray-700 duration-300"
    //         >
    //           Home
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           to={"/favorites"}
    //           className="text-black hover:text-gray-700 duration-300"
    //         >
    //           Favorites
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <NavLink to={"/"} className="">
            <IconButton variant="text" color="white" href="/">
              <HomeIcon className="h-4 w-4" href="/" />
            </IconButton>
          </NavLink>
          <NavLink to={"/favorites"} className="">
            <IconButton variant="text" color="white">
              <ShoppingCartIcon className="h-4 w-4" />
            </IconButton>
          </NavLink>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            color="white"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
            
          />
          <Button
            size="sm"
            color="white"
            className="rounded"
            onClick={handleSubmit} // Use onClick instead of onSubmit
          >
            Search
          </Button>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
