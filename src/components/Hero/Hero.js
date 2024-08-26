import React from "react";
import "./Hero.css";
import img01 from "../../assets/images/home.gif";
import myCV from "../../assets/files/WebDeveloperIntern_PhanQuocBao.pdf";

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <h2>Hello! I'am Bao</h2>
        <h5>
          I'm a <span>Web Developer</span>
        </h5>

        <p>
          With a solid background in HTML, CSS and JavaScript, I look forward to
          contributing to your Company's growth as a Web Developer.
        </p>
        <div className="hero-btn">
          <button className="btn btn-contact">
            <a href="#contact">Contact Me</a>
          </button>
          <button className="btn btn-cv">
            <a href={myCV} download="FrontendDeveloper_PhanQuocBao.pdf">
              <span> Download CV</span>
              <span className="material-icons-outlined">file_download</span>
            </a>
          </button>
        </div>
      </div>

      <div className="hero-img">
        <img src={img01} alt="" />
      </div>
    </section>
  );
};

export default Hero;
