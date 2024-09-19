/** @format */

import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const CustomInput = ({ inputProps }) => {
  return (
    <FormControl>
      <FormLabel
        className="  px-2 h-5 bg-white text-gray-600 	 absolute left-7 top-[-13px] z-10 m-0 color"
        textAlign="center"
        fontWeight="normal"
        htmlFor="password">
        {inputProps.label}
      </FormLabel>
      <Input type={inputProps.type} id="email" h="60px" autoComplete="email" required placeholder={inputProps.placeholder} />
    </FormControl>
  );
};

export default CustomInput;
