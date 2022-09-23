import React from "react";
import { About } from "../About";
import Comments from "../Comments";
import Sandbox from "../Sandbox";
import Templates from "../Templates";
import "../../assets/styles/main.css";
import Footer from "../Footer";
import LandingPage from "./LandingPage";
import TemplatesListData from "../../components/TemplatesList";

function Home() {
  return (
    <>
      <div className="home">
        <LandingPage/>
      </div>
      <About />
      <Templates templates={TemplatesListData} />
      <Sandbox />
      <Comments />
    </>
  );
}

export default Home;
