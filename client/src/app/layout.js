/** @format */
"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./lib/store";
import { ThemeProvider } from "@material-tailwind/react";

import "./globals.css";

export default function Layout({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <ThemeProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </ThemeProvider>
    </Provider>
  );
}
