/** @format */
"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./lib/store";

import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header/Header";

export default function Layout({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  // sm md lg xl 2xl
  return (
    <Provider store={storeRef.current}>
      <html lang="en">
        <body>
          <div className="flex flex-col items-center">
            <div className="2xl:w-[72%] xl:w-[88%] lg:w-[80%] sm:w-[75%] w-[90%]">
              <Header />
              <ChakraProvider resetCSS>{children}</ChakraProvider>
            </div>
          </div>
        </body>
      </html>
    </Provider>
  );
}
