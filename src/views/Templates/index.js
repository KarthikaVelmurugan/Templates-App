import React, { useState } from "react";
import "../../assets/styles/main.css";
import PDFViewer from "./PDFViewer";
import TemplateContentViewer from "./TemplateContentViewer";
import TemplatesListData from "../../components/TemplatesList";
import LeftArrowIcon from "../../assets/icons/left-arrow.svg";
import RightArrowIcon from "../../assets/icons/right-arrow.svg"

const Templates = ({ templates }) => {
  const [current, setCurrent] = useState(0);
  const length = templates.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(templates) || templates.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <img src={LeftArrowIcon} className="left-arrow" onClick={prevSlide} />
      <img src={RightArrowIcon} className="right-arrow" onClick={nextSlide} />
      {TemplatesListData.map((template, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className="templates">
                <PDFViewer filename={template.filename} />
                <TemplateContentViewer name={template.name} />
              </div>
            )}
            )
          </div>
        );
      })}
    </section>
  );
};

export default Templates;
