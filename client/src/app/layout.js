/** @format */
"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./lib/store";

import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function Layout({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <html lang="en">
        <body>
          <ChakraProvider resetCSS>{children}</ChakraProvider>
        </body>
      </html>
    </Provider>
  );
}
