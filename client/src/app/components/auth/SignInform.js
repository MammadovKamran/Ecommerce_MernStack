/** @format */

// app/components/auth/SignInForm.js

"use client";

// import { Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { PasswordField } from "./PasswordField";
import { Box, Button, Container, FormControl, FormLabel, Heading, Image, Input, Stack } from "@chakra-ui/react";
import CustomInput from "./CustomInput";

// import { signIn } from "@/services/authService";

const SignInform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await signIn({ email, password });
    // if (response.success) {
    //   window.location.href = "/";
    // } else {
    //   alert("Login failed");
    // }
  };

  return (
    <>
      <div className="flex flex-row h-full">
        <div className="basis-1/3 bg-login-image bg-cover bg-no-repeat pl-24 pt-10 ">
          <div className="h-2/6 flex flex-col justify-around">
            <img className="w-40" src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png" alt="eTrade" />
            <h3 className="text-black text-3xl font-semibold w-4/5">We Offer the Best Products</h3>
          </div>
        </div>
        <div className="w-full flex-1 ">
          <div className=" basis-2/3 flex min-h-full flex-1 justify-between    px-6 py-12 lg:px-8">
            <div className="w-3/4 flex items-center justify-center">
              <div className="w-full">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <h2 className="mt-10  text-3xl  font-semibold  leading-9 tracking-tight text-gray-900">Sign in to eTrade.</h2>
                  <p className="mt-4 text-sm text-gray-400">Enter your detail below</p>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form onSubmit={handleSubmit}>
                    <Stack spacing="5">
                      <CustomInput inputProps={{ placeholder: "annie@example.com", type: "email", label: "Email" }} />
                      <PasswordField required />
                    </Stack>
                    <Stack spacing="6" mt={8}>
                      <Button width="100%" backgroundColor="#0069A6" color="white" type="submit">
                        Sign in
                      </Button>
                    </Stack>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex items-start  ml-auto w-1/4  ">
              <div className="flex items-center w-full justify-between">
                <p className=" text-sm font-light text-black hover:text-indigo-500">Not a member?</p>
                <button
                  type="submit"
                  className="flex w-3/5 max-w-44 justify-center py-5 bg-pink-500   text-base font-semibold leading-6  shadow-sm custom-button ">
                  Sign Up Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInform;
