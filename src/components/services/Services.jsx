import React from "react";
import "./services.css";
import { BiRightArrow } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Services I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>
                Designing graphic user interface elements, like menus, tabs and
                widgets
              </p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>
                Illustrating design ideas using storyboards, process flows and
                sitemaps
              </p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Build page navigation buttons and search fields</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Identify and troubleshoot UX problems</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Create original graphic designs</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Designing user interfaces and navigation menus</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>
                Writing and reviewing code for sites, typically HTML, XML, or
                JavaScript
              </p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Integrating multimedia content onto a site</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Testing web applications</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>
                Troubleshooting problems with performance or user experience
              </p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Collaborating with designers, developers, and stakeholders</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Software Developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Producing clean, efficient code based on specifications</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Testing and deploying programs and systems</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Fixing and improving existing software</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Work with developers to design algorithms and flowcharts</p>
            </li>
            <li>
              <BiRightArrow className="service__list-icon" />
              <p>Verify and deploy programs and systems</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
