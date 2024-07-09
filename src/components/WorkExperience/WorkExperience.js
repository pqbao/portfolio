import React, { useRef } from "react";
import "./WorkExperience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { WORK_EXPERIENCE } from "../../utils/data";
import Slider from "react-slick";

const WorkExperience = () => {
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
    <section id="experience" className="experience-container">
      <h5>Work Experience</h5>
      <div className="experience-content">
        <div className="arrow-right" onClick={sliceRight}>
          <span className="material-icons-outlined">keyboard_arrow_right</span>
        </div>

        <div className="arrow-left" onClick={sliceLeft}>
          <span className="material-icons-outlined">keyboard_arrow_left</span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item, index) => (
            <ExperienceCard key={index} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
