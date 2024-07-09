import React, { useRef } from "react";
import "./Project.css";
import { PROJECTS } from "../../utils/data";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard/ProjectCard";

const Project = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliceRight = () => {
    sliderRef.current.slickNext();
  };
  const sliceLeft = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <section id="projects" className="project-container">
      <h5>Projects</h5>
      <div className="project-content">
        <div className="arrow-right" onClick={sliceRight}>
          <span className="material-icons-outlined">keyboard_arrow_right</span>
        </div>

        <div className="arrow-left" onClick={sliceLeft}>
          <span className="material-icons-outlined">keyboard_arrow_left</span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {PROJECTS.map((item, index) => (
            <ProjectCard key={index} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Project;
