import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "../views/About";
import Comments from "../views/Comments";
import Home from "../views/Home";
import { BaseLayout } from "../views/Layouts/BaseLayout";
import Sandbox from "../views/Sandbox";
import Templates from "../views/Templates";
import TemplatesListData from "../components/TemplatesList";
function Root() {
  return (
      
    <Router>
      <Routes>
        <Route  element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/templates" element={<Templates templates={TemplatesListData} />} />
          <Route path="/sandbox" element={<Sandbox />} />
          <Route path="/comments" element={<Comments />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Root;
