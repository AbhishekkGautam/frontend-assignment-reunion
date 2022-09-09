import React from "react";
import "./NavWrapper.css";
import { Navbar } from "../Navbar/Navbar";

export const NavWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="main-container">{children}</main>
    </>
  );
};
