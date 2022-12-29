import React from "react";
import "./about.css";
import ME from "../../assets/coverr.png";
import { FiBook } from "react-icons/fi";
import { TbAward } from "react-icons/tb";
import { VscFileCode } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Who Am I?</h5>
      <h2>About ME</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiBook className="about__icon" />
              <h5>Education</h5>
              <small>BE/B.Tech</small>
            </article>
            <article className="about__card">
              <TbAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <VscFileCode className="about__icon" />
              <h5>Projects</h5>
              <small>5+ FrontEnd Projects</small>
            </article>
          </div>

          <p align="justify">
            I'm pursuing my final year BE in Electronic and Communication Engineering, robust in design and integration with intuitive problem-solving skills. Proficient in JAVA, SQL and keen knowledge in Embedded Systems. Passionate about implementing and launching new projects and have the ability to translate business requirements into technical solutions.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
