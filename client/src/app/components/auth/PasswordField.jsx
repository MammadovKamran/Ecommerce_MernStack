/** @format */
"use client";
import { FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement, useDisclosure, useMergeRefs } from "@chakra-ui/react";
import { forwardRef, useRef } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

export const PasswordField = forwardRef((props, ref) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef(null);
  const mergeRef = useMergeRefs(inputRef, ref);
  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({
        preventScroll: true,
      });
    }
  };

  return (
    <FormControl className="relative">
      <FormLabel
        className=" w-20 h-5 bg-white text-gray-600 	 absolute left-7 top-[-13px] z-10 m-0 color"
        textAlign="center"
        fontWeight="normal"
        htmlFor="password">
        Password
      </FormLabel>
      <InputGroup>
        <InputRightElement h="100%" alignItems="center">
          <IconButton
            size="lg"
            variant="text"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <HiEyeOff size={18} /> : <HiEye size={18} />}
            onClick={onClickReveal}
            h="auto" // Auto height to adjust according to the content
            minW="auto" // Set min width to auto to avoid oversized button
          />
        </InputRightElement>
        <Input
          id="password"
          h="60px"
          ref={mergeRef}
          name="password"
          type={isOpen ? "text" : "password"}
          autoComplete="current-password"
          required
          placeholder="***************"
          {...props}
        />
      </InputGroup>
    </FormControl>
  );
});

PasswordField.displayName = "PasswordField";
