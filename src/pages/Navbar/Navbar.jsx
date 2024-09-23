import React from "react";
import menuIcon from "../../assets/svg/menu.svg";
import worldIcon from "../../assets/svg/world.svg";
import addIcon from "../../assets/svg/add.svg";
import searchIcon from "../../assets/svg/search.svg";
import searchBarIcon from "../../assets/svg/searchBar.svg";
import shoppinCartIcon from "../../assets/svg/shopping_cart.svg";
import callIcon from "../../assets/svg/call.svg";
import autoFixIcon from "../../assets/svg/auto_fix_normal.svg";
import helpIcon from "../../assets/svg/help_outline.svg";
import bangladeshFlagIcon from "../../assets/svg/emojione_flag-for-bangladesh.svg";
import arrowDownIcon from "../../assets/svg/arrow_drop_down.svg";
import gridviewIcon from "../../assets/svg/grid_view.svg";
import expandMoreIcon from "../../assets/svg/expand_more.svg";
import accountCircleIcon from "../../assets/svg/account_circle.svg";
import favoriteIcon from "../../assets/svg/favorite_border.svg";

const Navbar = () => {
  return (
    <div>
      {/* top navbar */}
      <div className="hidden md:px-6 md:flex md:h-[1.875rem]  md:items-center md:justify-between md:shrink-0 xl:justify-center xl:items-center md:bg-color-neutral-900">
        {/* container for topNavbar items */}
        <div className="md:w-[90rem] md:flex md:h-[1.875rem]  md:items-center md:justify-between md:shrink-0s">
          {/* phone number  */}

          <div className="md:flex md:p-1 md:justify-center md:items-center md:gap-1">
            <img src={callIcon} alt="call" className="md:h-4 md:w-4" />
            <span className="md:text-color-green-50 md:font-poppins md:not-italic md:leading-none">
              +880 1885 780 820
            </span>
          </div>

          {/* messages top navbar */}
          <div className="md:flex md:p-1 md:justify-center md:items-center md:gap-1">
            <img src={autoFixIcon} alt="fix" className="md:h-4 md:w-4" />
            <span className="md:text-color-green-50 md:font-poppins md:text-sm md:not-italic md:leading-none">
              Cash on Delivery is totally free for first order
            </span>
          </div>
          {/* customer help and language selection */}
          <div className="md:flex md:justify-end md:items-center md:gap-3">
            {/* customer help */}
            <div className="md:flex md:py-[0.125rem ] md:justify-center md:items-center md:gap-1">
              <img src={helpIcon} alt="help" className="md:h-4 md:w-4" />
              <span className="md:text-color-green-50 md:font-poppins md:text-sm md:not-italic md:leading-none">
                Customer Help
              </span>
            </div>
            {/* language selection */}
            <div className="md:flex md:py-[0.125rem] md:justify-center md:items-center md:gap-1">
              <img src={bangladeshFlagIcon} alt="BD" />
              <span className="md:text-color-green-50 md:font-poppins md:text-sm md:not-italic md:leading-none">
                BN
              </span>
              <img src={arrowDownIcon} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* navbar */}
      <div className="px-3 md:px-6 bg-color-green-950 md:flex md:items-center md:justify-between md:shrink-0 xl:justify-center xl:items-center ">
        {/* container for all nav bar items */}
        <div className=" md:w-[90rem] md:flex  md:items-center md:justify-between md:shrink-0s md:gap-5 lg:flex xl:flex lg:justify-center lg:items-centers">
          {/* container for logo, search bar and reponsive for tab and mobile device*/}
          <div className="flex py-4 justify-between items-center md:flex md:gap-4 lg:flex lg:gap-4">
            {/* menu for small and medium device */}
            <div className="flex md:flex xl:hidden">
              <button className="p-2 items-center rounded-xl border border-color-green-900 gap-2.5 lg:hidden">
                <img src={menuIcon} alt="Menu" />
              </button>
            </div>
            {/* logo */}
            <div>
              <a href="/">
                <div className="flex gap-[0.1875rem] items-center">
                  <img src={worldIcon} alt="worldIcon" className="w-10 h-10" />
                  <div className="text-color-green-500 font-maven text-2xl non-italic font-bold leading-none tracking-wider capitalize">
                    Organic
                  </div>
                  <img src={addIcon} alt="addIcon" className="w-5 h-5" />
                </div>
              </a>
            </div>
            {/* All Categories for medium and large device */}
            <div className="hidden md:hidden lg:flex lg:h-10 lg:py-3 lg:justify-center lg:items-center lg:gap-1 ">
              <a href="#">
                <div className="lg:flex lg:h-10 lg:py-3 lg:justify-center lg:items-center lg:gap-1 ">
                  <img
                    src={gridviewIcon}
                    alt="All Categories"
                    className="md:h-4 md:w-4"
                  />
                  <span className="md:text-color-green-50 md:font-poppins md:font-semibold md:text-sm md:not-italic md:leading-none">
                    All Categories
                  </span>
                  <img
                    src={expandMoreIcon}
                    alt="expand"
                    className="md:h-4 md:w-4"
                  />
                </div>
              </a>
            </div>

            {/* searchbar */}
            <div className="hidden md:flex md:grow lg:flex lg:grow md:bg-color-base-black md:rounded-3xl">
              <div className="hidden md:flex md:flex-100  md:self-stretch md:px-[0.93744rem] md:py-2 md:items-center md:gap-[0.62494rem]">
                {/* icon for  search bar */}
                <img
                  src={searchBarIcon}
                  alt="searchBarIcon"
                  className="w-5 h-5"
                />

                {/* input box for search */}

                <input
                  type="text"
                  placeholder="Search in Organic Plus"
                  className="md:flex md:grow md:font-poppins md:w-4/5 md:text-sm md:text-[#008738] md:placeholder:text-[#008738] md:bg-black md:font-semibold md:focus:text-[#008738]"
                />
              </div>
              {/* search button in search bar  */}
              <div className="md:p-[0.12rem]">
                <button className="md:flex md:h-9 md:p-2 md:justify-center md:gap-1 md:rounded-3xl md:bg-[#005222] md:text-[#DAF9E7] md:font-poppins md:text-sm md:font-bold md:px-4 md:py-2">
                  Search
                </button>
              </div>
            </div>

            {/* search icon from small device and tab */}
            <div className="flex md:hidden xl:hidden 2xl:hidden">
              <button className="p-2 items-center rounded-xl border border-color-green-900 gap-2.5 md:hidden xl:hidden 2xl:hidden">
                <img src={searchIcon} alt="searchIcon" />
              </button>
            </div>
          </div>

          {/* container for login */}
          <div className="hidden md:hidden lg:flex lg:border-color-green-800">
            <a href="#">
              <div className="hidden md:hidden lg:flex lg:py-[0.3125rem] lg:pr-[0.75rem] lg:pl-[0.3125rem] lg:items-center lg:gap-2 lg:border-color-green-800 lg:rounded-[22.5rem] lg:border">
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
          </div>
          {/* container for favourite item */}
          <div className="hidden md:hidden lg:flex lg:w-10 lg:h-10 lg:px-2 lg:pt-2 lg:pb-[0.125rem]">
            <a href="#">
              <img
                src={favoriteIcon}
                alt="wishlist"
                className="lg:h-6 lg:w-6 lg:shrink-0"
              />
            </a>
          </div>
          {/* container for cart */}
          <div className="hidden md:flex md:items-start md:gap-2 ">
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
    </div>
  );
};

export default Navbar;
