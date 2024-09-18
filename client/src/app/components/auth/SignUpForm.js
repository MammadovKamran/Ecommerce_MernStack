/** @format */

// app/components/auth/SignUpForm.js

"use client";

import { useState } from "react";
// import { signUp } from "@/services/authService";
import { Input, Typography } from "@material-tailwind/react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await signUp({ email, password });
    // if (response.success) {
    //   window.location.href = "/auth/signin";
    // } else {
    //   alert("Registration failed");
    // }
  };

  return (
    <>
      <div className="flex flex-row h-full">
        <div className="basis-1/3 bg-signup-image bg-cover bg-no-repeat pl-24 pt-10 ">
          <div className="h-2/6 flex flex-col justify-around">
            <img className="w-40" src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png" alt="eTrade" />
            <h3 className="text-black text-3xl font-semibold w-4/5">We Offer the Best Products</h3>
          </div>
        </div>
        <div className="w-full flex-1 mb-auto ">
          <div className=" basis-2/3 flex min-h-full flex-1 flex-col justify-center   px-6 py-12 lg:px-8">
            <div className="flex justify-between ml-auto w-1/3 items-center">
              <p className=" text-sm font-light text-black hover:text-indigo-500">Already a member?</p>
              <button
                type="submit"
                className="flex w-3/5 max-w-44 justify-center py-5 bg-pink-500   text-base font-semibold leading-6  shadow-sm custom-button ">
                Sign In
              </button>
            </div>
            <div className="mr-48">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10  text-3xl  font-semibold  leading-9 tracking-tight text-gray-900">I'm New Here</h2>
                <p className="mt-4 text-sm text-gray-400">Enter your detail below</p>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                  <div className="w-full">
                    <Input color="blue" size="lg" variant="outlined" label="Username" placeholder="Username" className="h-16" />
                  </div>
                  <div className="w-full">
                    <Input color="blue" size="lg" variant="outlined" label="Email" placeholder="user@example.com" className="h-16" />
                  </div>
                  <div>
                    <div className="w-full">
                      <Input color="blue" type="password" label="Password" size="lg" variant="outlined" />
                      <Typography variant="small" color="gray" className="mt-2 flex items-center gap-1 font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="-mt-px h-4 w-4">
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Use at least 8 characters, one uppercase, one lowercase and one number.
                      </Typography>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      type="submit"
                      className="flex w-2/6   justify-center  py-2 bg-blue-600  rounded-md  text-base font-semibold leading-6 shadow-sm custom-button ">
                      Sign In
                    </button>

                    <a href="#" className=" text-sm font-light text-blue-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
