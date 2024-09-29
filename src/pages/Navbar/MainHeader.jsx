import React from "react";
import gridviewIcon from "../../assets/svg/grid_view.svg";
import expandMoreIcon from "../../assets/svg/expand_more.svg";
import accountCircleIcon from "../../assets/svg/account_circle.svg";
import favoriteIcon from "../../assets/svg/favorite_border.svg";
import menuIcon from "../../assets/svg/menu.svg";
import groupIcon from "../../assets/svg/Group.svg";
import addIcon from "../../assets/svg/add.svg";
import searchIcon from "../../assets/svg/search.svg";
import searchBarIcon from "../../assets/svg/searchBar.svg";
import shoppinCartIcon from "../../assets/svg/shopping_cart.svg";

const MainHeader = () => {
  return (
    // Navbar
    <div className="flex py-4 px-6 justify-center items-center gap-[1.12494rem] bg-color-green-950 backdrop-blur">
      {/* Navbar container  */}
      <div className="flex max-w-[90rem] items-center flex-100 ">
        {/* items container  */}
        <div className="w-full flex justify-between md:justify-center md:items-center md:gap-[1.125rem] flex-100">
          {/* menu item button for mobile and tab */}
          <div className="flex items-center gap-[0.625rem] md:hidden lg:hidden xl:hidden">
            <button className="rounded-xl border border-color-green-900">
              <img src={menuIcon} alt="menu" className="h-10 w-10 p-2" />
            </button>
          </div>

          {/* logo  */}
          <div className="flex items-center justify-center gap-2">
            <a href="/" className="flex items-center justify-center gap-2">
              <img src={groupIcon} alt="logo" className="w-10 h-10" />
              <span className="text-color-green-500 font-lexend text-2xl not-italic leading-none font-bold capitalize hidden md:flex lg:flex">
                Taqwa Farm
              </span>
            </a>
          </div>

          {/* search button for mobile device and tab */}
          <div className="flex self-end md:hidden lg:hidden xl:hidden">
            <button className="p-2 items-center rounded-xl border border-color-green-900 gap-2.5">
              <img src={searchIcon} alt="searchIcon" />
            </button>
          </div>

          {/* all categories */}
          <div className="hidden md:hidden lg:flex xl:flex">
            <button className="flex items-center justify-center gap-1 py-3 h-10">
              <img src={gridviewIcon} alt="grid" className="w-4 h-4" />
              <span className="text-color-green-50 font-poppins font-semibold text-sm not-italic leading-none">
                All Categories
              </span>
              <img src={expandMoreIcon} alt="arrow" className="h-4 w-4" />
            </button>
          </div>

          {/* search bar container */}
          <div className="hidden md:flex bg-search-bar-black rounded-3xl p-[0.125rem] items-center justify-center flex-100 ">
            {/* search bar */}
            <form action="#" className="w-full px-[0.93744rem] py-[0.5rem ]">
              <div className="flex text-008738 gap-[0.62494rem]">
                {/* this div for search icon  */}
                <img
                  src={searchBarIcon}
                  alt="search"
                  className="h-5 w-5 pointer-events-none"
                />
                {/* this div for search input box  */}
                <input
                  type="text"
                  className="font-poppins w-full text-sm text-[#008738] placeholder:text-[#008738] bg-black font-semibold focus:text-[#008738]"
                  placeholder="Search in Organic Plus"
                />
              </div>
            </form>
            {/* this div for search button  */}
            <button className="md:flex md:h-9 md:p-2 md:justify-center md:gap-1 md:rounded-[1.24994rem] md:bg-[#005222] md:text-[#DAF9E7] md:font-poppins md:text-sm md:font-bold md:px-4 md:py-2">
              Search
            </button>
          </div>

          {/* startinggg---- loggin profile and favourite items */}
          {/* login profile */}
          <div className="hidden md:hidden lg:flex lg:py-[0.3125rem] lg:pr-[0.75rem] lg:pl-[0.3125rem] lg:items-center lg:gap-2 lg:border lg:border-color-green-800 lg:rounded-[22.5rem]">
            <button className="flex items-center justify-center">
              <img
                src={accountCircleIcon}
                alt="Profile"
                className=" lg:h-[1.875rem] lg:w-[1.875rem]"
              />
              <span className=" lg:text-color-green-50 lg:font-poppins lg:text-xs lg:not-italic lg:font-semibold lg:capitalize">
                Login
              </span>
            </button>
          </div>

          {/* favourite item (love) */}

          <div className="hidden md:hidden lg:flex lg:w-10 lg:h-10 lg:px-2 lg:pt-2 lg:pb-[0.125rem]">
            <a href="#">
              <img
                src={favoriteIcon}
                alt="wishlist"
                className="lg:h-6 lg:w-6 lg:shrink-0"
              />
            </a>
          </div>

          {/* for shopping cart */}

          <div className="hidden md:flex md:items-start md:gap-2 md:mr-4">
            <img
              src={shoppinCartIcon}
              alt="Shopping Cart"
              className="md:flex md:w-10 md:h-10 md:px-2 md:pb-[0.125rem] md:pt-2 md:justify-center items-center"
            />
            <div className="md:flex md:flex-col md:justify-center md:items-start  md:self-stretch">
              <button className="flex justify-center flex-col">
                <span className="md:text-[#DAF9E7] md:font-poppins md:text-sm md:font-semibold md:capitalize pointer-events-none cursor-pointer">
                  Cart
                </span>
                <span className="md:text-[#DAF9E7] md:font-poppins md:text-sm md:font-semibold md:capitalize">
                  $ 56.00
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
