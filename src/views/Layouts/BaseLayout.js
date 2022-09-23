import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Header";
import "../../assets/styles/main.css"
import Footer from "../Footer";

const BaseLayout = () => {
  return (
    <div className="body">
      <Header></Header>
      <Outlet />
      <Footer/>
    </div>
  );
};
export { BaseLayout };
