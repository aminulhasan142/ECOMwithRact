import React from "react";
import menuIcon from "../assets/svg/menu.svg";
import worldIcon from "../assets/svg/world.svg";
import addIcon from "../assets/svg/add.svg";
import searchIcon from "../assets/svg/search.svg";
import searchBarIcon from "../assets/svg/searchBar.svg";
import shoppinCartIcon from "../assets/svg/shopping_cart.svg";
import callIcon from "../assets/svg/call.svg";
import autoFixIcon from "../assets/svg/auto_fix_normal.svg";
import helpIcon from "../assets/svg/help_outline.svg";
import bangladeshFlagIcon from "../assets/svg/emojione_flag-for-bangladesh.svg";
import arrowDownIcon from "../assets/svg/arrow_drop_down.svg";
import gridviewIcon from "../assets/svg/grid_view.svg";
import expandMoreIcon from "../assets/svg/expand_more.svg";
import accountCircleIcon from "../assets/svg/account_circle.svg";
import favoriteIcon from "../assets/svg/favorite_border.svg";

const Header = () => {
  return (
    <div className="lg:w-[90rem] xl:w-[120rem] md:w-[64rem]">
      {/* ------------this is for black nav bar------------- */}

      {/* a div for that black nav bar for emergency contact */}
      <div className="hidden md:flex md:w-full md:h-[1.875rem] md:px-6 md:items-center md:justify-between md:shrink-0 md:bg-color-neutral-900 lg:w-full  xl:w-full">
        {/* phone number */}
        <div className="md:flex md:p-1 md:justify-center md:items-center md:gap-1">
          <img src={callIcon} alt="call" className="md:h-4 md:w-4" />
          <span className="md:text-color-green-50 md:font-poppins md:font-medium md:not-italic md:leading-none">
            +880 1885 780 820
          </span>
        </div>

        {/* cash on delivery div */}

        <div className="md:flex md:p-1 md:justify-center md:items-center md:gap-1">
          <img src={autoFixIcon} alt="fix" className="md:h-4 md:w-4" />
          <span className="md:text-color-green-50 md:font-poppins md:font-medium md:text-sm md:not-italic md:leading-none">
            Cash on Delivery is totally free for first order
          </span>
        </div>

        {/* customer help and language selection */}

        <div className="md:flex md:justify-end md:items-center md:gap-3">
          {/* customer help */}
          <div className="md:flex md:py-[0.125rem ] md:justify-center md:items-center md:gap-1">
            <img src={helpIcon} alt="help" className="md:h-4 md:w-4" />
            <span className="md:text-color-green-50 md:font-poppins md:font-medium md:text-sm md:not-italic md:leading-none">
              Customer Help
            </span>
          </div>
          {/* language selection */}
          <div className="md:flex md:py-[0.125rem ] md:justify-center md:items-center md:gap-1">
            <img src={bangladeshFlagIcon} alt="BD" />
            <span className="md:text-color-green-50 md:font-poppins md:font-medium md:text-sm md:not-italic md:leading-none">
              BN
            </span>
            <img src={arrowDownIcon} alt="" />
          </div>
        </div>
      </div>

      {/* end:::: black navbar div */}

      {/* ----------this is for that greenish nav bar-------- */}
      <div className="bg-color-green-950 flex w-[23.4375rem] pt-8 px-3 pb-2 justify-between items-center md:pt-4 max-sm:w-auto sm:w-auto md:w-full lg:w-full">
        {/* menu icon, logo, search bar div */}

        {/* menu icon */}
        <button className="p-2 items-center rounded-xl border border-color-green-900 gap-2.5 lg:hidden">
          <img src={menuIcon} alt="Menu" />
        </button>

        {/* organic logo */}
        <a href="/">
          <div className="flex gap-[0.1875rem] items-center md:ml-4 md:mr-4">
            <img src={worldIcon} alt="worldIcon" className="w-10 h-10" />
            <div className="text-color-green-500 font-maven text-2xl non-italic font-bold leading-none tracking-wider capitalize">
              Organic
            </div>
            <img src={addIcon} alt="addIcon" className="w-5 h-5" />
          </div>
        </a>

        {/* All Categories items div */}
        <a href="#">
          <div className="hidden md:hidden lg:flex lg:h-10 lg:py-3 lg:justify-center lg:items-center lg:gap-1 lg:mr-4">
            <img
              src={gridviewIcon}
              alt="All Categories"
              className="md:h-4 md:w-4"
            />
            <span className="md:text-color-green-50 md:font-poppins md:font-semibold md:text-sm md:not-italic md:leading-none">
              All Categories
            </span>
            <img src={expandMoreIcon} alt="expand" className="md:h-4 md:w-4" />
          </div>
        </a>

        {/* search bar */}
        {/* search icon */}
        <button className="p-2 items-center rounded-xl border border-color-green-900 gap-2.5 md:hidden xl:hidden 2xl:hidden mr-1">
          <img src={searchIcon} alt="searchIcon" />
        </button>
        {/* sreach area div box */}
        <div className="hidden md:flex md:h-10 md:p-[0.125rem] md:justify-center md:flex-100 md:rounded-3xl md:bg-black">
          <div className="md:flex md:px-[0.93744rem] md:py-[0.5rem] md:items-center md:gap-[0.62494rem] md:flex-100 md:self-stretch">
            {/* this div for search icon  */}
            <img
              src={searchBarIcon}
              alt="searchBarIcon"
              className="md:bg-black"
            />

            {/* input for search  */}

            <input
              type="text"
              placeholder="Search in Organic Plus"
              className="md:font-poppins md:w-full md:text-sm md:text-[#008738] md:placeholder:text-[#008738] md:bg-black md:font-semibold md:focus:text-[#008738]"
            />
          </div>

          {/* search button for searching */}

          <button className="md:flex md:h-9 md:p-2 md:justify-center md:gap-1 md:rounded-[1.24994rem] md:bg-[#005222] md:text-[#DAF9E7] md:font-poppins md:text-sm md:font-bold md:px-4 md:py-2">
            Search
          </button>
        </div>

        {/* startinggg---- loggin profile and favourite items */}

        <a href="#">
          <div className="hidden md:hidden lg:flex lg:py-[0.3125rem] lg:pr-[0.75rem] lg:pl-[0.3125rem] lg:items-center lg:gap-2 lg:border-color-green-800 lg:rounded-[22.5rem]">
            <img
              src={accountCircleIcon}
              alt="Profile"
              className=" lg:h-[1.875rem] lg:w-[1.875rem]"
            />
            <span className=" lg:text-color-green-50 lg:font-poppins lg:text-xs lg:not-italic lg:font-semibold lg:capitalize">
              Login
            </span>
          </div>
        </a>
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
            <span className="md:text-[#DAF9E7] md:font-poppins md:text-sm md:font-semibold md:capitalize">
              Cart
            </span>
            <span className="md:text-[#DAF9E7] md:font-poppins md:text-sm md:font-semibold md:capitalize">
              $ 56.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
