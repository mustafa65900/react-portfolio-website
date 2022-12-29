import React from "react";
import "./experience.css";
import { BiCheckbox } from "react-icons/bi";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I offer</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>HTML5</h4>
              <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>CSS3</h4>
              <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>BootStrap</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>ReactJS</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>VueJS</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>jQuery</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>AngularJS</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>C Programming</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>Java</h4>
              <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>Python3</h4>
              <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>PHP</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BiCheckbox className="experience__details-icon" />
              <div>
              <h4>MySQL</h4>
              <small className="text-light">Advance</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
