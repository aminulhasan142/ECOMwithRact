import React from "react";
import callIcon from "../../assets/svg/call.svg";
import autoFixIcon from "../../assets/svg/auto_fix_normal.svg";
import helpIcon from "../../assets/svg/help_outline.svg";
import bangladeshFlagIcon from "../../assets/svg/emojione_flag-for-bangladesh.svg";
import arrowDownIcon from "../../assets/svg/arrow_drop_down.svg";

const FirstHeader = () => {
  return (
    <div>
      {/* top navbar */}
      <div className="hidden md:px-6 md:flex md:h-[1.875rem]  md:items-center md:justify-between md:shrink-0 xl:justify-center xl:items-center md:bg-color-neutral-900">
        {/* container for topNavbar items */}
        <div className="md:w-[90rem] md:flex md:h-[1.875rem]  md:items-center md:justify-between ">
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
    </div>
  );
};

export default FirstHeader;
