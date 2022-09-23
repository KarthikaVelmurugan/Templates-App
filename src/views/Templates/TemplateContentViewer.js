import React, { useState } from "react";
import likes from "../../assets/icons/likes-icon.svg";
import downloads from "../../assets/icons/downloads-icon.svg";
import Accordian from "../../components/Accordian";
const TemplateContentViewer = ({name}) => {
  return (
    <div className="templateContent">
      <div className="heading">
        <div className="templateTitle">{name}</div>
        <div className="icons">
          <div className="likes">
            <img src={likes} height="22" width="22"></img>
            <span className="count">10</span>
          </div>

          <div className="likes">
            <img src={downloads} height="22" width="22"></img>
            <span className="count">13</span>
          </div>
        </div>
      </div>

      <div className="templatesubtitle">Group by Subscription Identifier</div>
      <h5 className="rating">*****</h5>
      <div className="accordionList">
        <Accordian />
        <Accordian />

        <Accordian />
        <Accordian />
      </div>
      <div className="actionBtns">
        <button className="actionBtn">Download XSL</button>
        <button className="actionBtn">Download XML</button>
        <button className="actionBtn">Download PDF</button>
      </div>
    </div>
  );
};

export default TemplateContentViewer;
