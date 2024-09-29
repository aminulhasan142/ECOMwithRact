import React from "react";
import Navbar from "../Navbar/Navbar";
import AppleLogo from "../../assets/svg/AppleLogo.svg";
import FacebookLogo from "../../assets/svg/FacebookLogo.svg";
import GoogleLogo from "../../assets/svg/GoogleLogo.svg";
import VisibilityLogo from "../../assets/svg/visibility_off.svg";
const Login = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="bg-color-base-body flex flex-col items-center justify-center min-h-lvh">
        {/* login form */}
        <div className="bg-color-base-body flex flex-col items-center justify-center w-full flex-1 px-20">
          {/* items container */}
          <div className="flex rounded-2xl shadow-sm w-[22rem] md:w-[27rem] lg:w-[30rem] max-w-[32rem]  bg-color-base-white-pure p-6 md:p-10 lg:p-10">
            {/* login form */}
            <div className="flex flex-col w-full gap-4">
              {/* login title container */}

              <div className="text-color-neutral-950 font-poppins font-bold text-2xl text-center">
                Login
              </div>

              {/* container for third party login, divider for login form and form and button */}
              <div className="flex flex-col w-full gap-6 self-stretch">
                {/* third party login with */}
                <div className="flex  gap-1 self-stretch items-center justify-center">
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
                    <img
                      src={AppleLogo}
                      alt="Apple"
                      className="h-4 w-4 shrink-0"
                    />
                    <span className="text-color-neutral-700 font-poppins font-medium text-sm leading-none">
                      Apple
                    </span>
                  </button>
                </div>

                {/* divider with form */}
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

                {/* login form */}
                <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      class="block mb-1 text-color-neutral-400 font-poppins text-sm font-medium"
                    >
                      Email/Mobile no
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="flex w-full p-[0.8125rem] items-center self-stretch border rounded-2xl border-color-neutral-400 focus:outline-none focus:border-color-green-500 focus:ring-1 focus:ring-color-green-500 text-color-green-950 font-poppins text-sm font-semibold leading-none placeholder:text-color-neutral-400 placeholder:font-normal"
                      placeholder="Enter Your Email"
                      required=""
                    />
                  </div>
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
                      className="flex mt-1 w-full p-[0.8125rem] items-center self-stretch border rounded-2xl border-color-neutral-400 focus:outline-none focus:border-color-green-500 focus:ring-1 focus:ring-color-green-500 text-color-green-950 font-poppins text-sm font-semibold leading-none placeholder:text-color-neutral-400 placeholder:font-normal"
                    />
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label
                          for="remember"
                          class="text-color-neutral-400 font-poppins text-sm font-medium not-italic leading-none"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* button for login */}
                  <button className="flex w-full py-[0.875rem] px-[1.25rem] flex-col justify-center items-center gap-[0.625rem] rounded-2xl bg-color-green-600 shadow-3xl">
                    <span className="text-color-green-50 font-poppins text-sm font-bold leading-none">
                      Login
                    </span>
                  </button>
                  <p class="text-color-neutral-500 font-poppins text-sm text-center">
                    Don’t have an account?{" "}
                    <a
                      href="#"
                      className="text-color-neutral-950 font-poppins text-sm not-italic font-bold leading-none"
                    >
                      Sign Up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
