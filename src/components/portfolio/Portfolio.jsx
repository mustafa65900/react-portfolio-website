import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/game.png";
import IMG2 from "../../assets/speech.png";
import IMG3 from "../../assets/calculator.png";
import IMG4 from "../../assets/pass.png";
import IMG5 from "../../assets/count.png";
import IMG6 from "../../assets/number.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Tic Tac Toe",
    github: "github.com/mustafa65900",
    demo: "https://mustafa65900.github.io/Tic_Tac_Toe/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Text to Speech Convertor",
    github: "github.com/mustafa65900",
    demo: "https://mustafa65900.github.io/Text_to_Speech/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Calculator",
    github: "github.com/mustafa65900",
    demo: "https://mustafa65900.github.io/Calculator/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Random Password Generator",
    github: "github.com/mustafa65900",
    demo: "https://mustafa65900.github.io/Random_Password_Generator/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Count Down Timer",
    github: "github.com/mustafa65900",
    demo: "https://mustafa65900.github.io/Count_Down_Timer/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Guess the Number Game",
    github: "github.com/mustafa65900",
    demo: "https://mustafa65900.github.io/Guess_the_Number/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
