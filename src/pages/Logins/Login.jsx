import React from "react";
import Navbar from "../Navbar/Navbar";
import AppleLogo from "../../assets/svg/AppleLogo.svg";
import FacebookLogo from "../../assets/svg/FacebookLogo.svg";
import GoogleLogo from "../../assets/svg/GoogleLogo.svg";
import VisibilityLogo from "../../assets/svg/visibility_off.svg";
const Login = () => {
  return (
    <div>
      <Navbar />

      {/* ----login form container start ----*/}
      <div className="bg-teal-500 h-[50.0625rem] flex justify-center items-center">
        {/* login title, login form box, don't have container box */}
        <div className="flex w-[26.25rem] min-w-[18.501rem] max-w-[26.25rem] p-6 flex-col justify-center items-center gap-4 shrink-0 rounded-4xl bg-color-base-white-pure md:flex md:p-6  lg:flex lg:p-6 ">
          {/* login title container */}
          <div className="text-color-neutral-950 font-poppins font-bold text-2xl">
            Login
          </div>

          {/* form container for login */}
          <div className="flex flex-col items-start gap-6 self-stretch">
            {/* login with third party methods */}
            <div className="flex items-start gap-1 self-stretch justify-center">
              {/* Google */}

              <button className="border-none flex w-[6.875rem] h-[2.6875rem] py-[0.625rem] px-[1.25rem] justify-center items-center gap-1 rounded-lg bg-color-neutral-100">
                <img
                  src={GoogleLogo}
                  alt="Google"
                  className="h-4 w-4 shrink-0"
                />
                <span className="text-color-neutral-700 font-poppins font-medium text-sm leading-none">
                  Google
                </span>
              </button>

              {/* facebook */}
              <button className="border-none flex w-[7rem] h-[2.6875rem] py-[0.625rem] px-[1.25rem] justify-center items-center gap-1 rounded-lg bg-color-neutral-100">
                <img
                  src={FacebookLogo}
                  alt="Facebook"
                  className="h-4 w-4 shrink-0"
                />
                <span className="text-color-neutral-700 font-poppins font-medium text-sm leading-none">
                  Facebook
                </span>
              </button>

              {/* Apple */}
              <button className="border-none flex w-[6.875rem] h-[2.6875rem] py-[0.625rem] px-[1.25rem] justify-center items-center gap-1 rounded-lg bg-color-neutral-100">
                <img src={AppleLogo} alt="Apple" className="h-4 w-4 shrink-0" />
                <span className="text-color-neutral-700 font-poppins font-medium text-sm leading-none">
                  Apple
                </span>
              </button>
            </div>

            {/* or continue with divider container */}
            <div className="flex items-center gap-2 self-stretch">
              {/* divider span */}
              <span className="h-[0.0625rem] bg-color-neutral-200 flex-100"></span>
              {/* text */}
              <span className="text-color-neutral-400 text-center font-poppins text-sm not-italic font-medium leading-none">
                Or Continue with
              </span>
              {/* divider span */}
              <span className="h-[0.0625rem] bg-color-neutral-200 flex-100"></span>
            </div>

            {/* with email and pass form container  */}
            <div className="w-full ">
              <form action="#" className="w-full gap-4">
                {/* for email */}
                <div className="gap-1">
                  <label
                    htmlFor="email"
                    className="text-color-neutral-400 font-poppins text-sm font-medium not-italic leading-none"
                  >
                    Email/Mobile no
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    required
                    className="flex w-full p-[0.8125rem] items-center self-stretch border rounded-2xl border-color-neutral-400 focus:outline-none focus:border-color-green-500 focus:ring-1 focus:ring-color-green-500 text-color-green-950 font-poppins text-sm font-semibold leading-none placeholder:text-color-neutral-400 placeholder:font-normal"
                  />
                </div>

                {/* for password */}
                <div className="gap-1">
                  {/* container for password titile and forget password */}
                  <div className="flex justify-between">
                    <label
                      htmlFor="password"
                      className="text-color-neutral-400 font-poppins text-sm font-medium not-italic leading-none"
                    >
                      Password
                    </label>
                    {/* button for forget password */}
                    <button className="border-none font-poppins text-color-green-600 text-sm not-italic font-medium leading-none">
                      Forget Password?
                    </button>
                  </div>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    required
                    className="flex w-full p-[0.8125rem] items-center self-stretch border rounded-2xl border-color-neutral-400 focus:outline-none focus:border-color-green-500 focus:ring-1 focus:ring-color-green-500 text-color-green-950 font-poppins text-sm font-semibold leading-none placeholder:text-color-neutral-400 placeholder:font-normal"
                  />
                </div>

                {/* remember me checkbox */}
                <div className="flex gap-[0.63rem]">
                  <input
                    type="checkbox"
                    className="apprence checked:bg-008738"
                  />
                  <span className="text-color-neutral-400 font-poppins text-sm font-medium not-italic leading-none">
                    Remember me
                  </span>
                </div>
              </form>
              {/* login button */}

              <button className="flex w-full py-[0.875rem ] px-[1.25rem] flex-col justify-center items-center gap-[0.625rem] rounded-2xl bg-color-green-600 shadow-3xl">
                <span className="text-color-green-50 font-poppins text-sm font-bold leading-none">
                  Login
                </span>
              </button>
            </div>

            {/* sign up container  */}
            <div className="flex w-full justify-center items-center">
              <span className="text-color-neutral-500 text-center font-poppins text-sm not-italic font-normal leading-none">
                Don’t have an account? &nbsp;
              </span>
              <a
                href="#"
                className="text-color-neutral-950 font-poppins text-sm not-italic font-bold leading-none"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
