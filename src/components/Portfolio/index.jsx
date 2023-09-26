import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const projects = [
  {
    id: 1,
    title: "Galleria",
    description:
      "A Gallery of photos that you can drag and drop and organize them how you'd like.",
    imageUrl: "Galleria.png",
    githubLink: "https://github.com/mwaney/Galleria",
    netlifyLink: "https://galleriapics.netlify.app/",
  },
  {
    id: 2,
    title: "MovieApp",
    description:
      "This web application was built using React.js and allows users to browse a collection of movies and watch their trailers.",
    imageUrl: "MovieApp.png",
    githubLink: "https://github.com/mwaney/MovieApp",
    netlifyLink: "https://rococo-froyo-b717ae.netlify.app/",
  },
  {
    id: 3,
    title: "SlackInfo",
    description:
      "The My Slack Info Web App is a simple and stylish site designed to display My Slack profile information in a user-friendly format.",
    imageUrl: "Slackinfo.png",
    githubLink: "https://github.com/mwaney/MySlackInfo",
    netlifyLink: "https://mwaney.github.io/MySlackInfo/",
  },
];

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const renderPortfolio = (projects) => {
    return (
      <div className="images-container">
        {projects.map((project) => (
          <div className="image-box" key={project.id}>
            <img
              src={project.imageUrl}
              className="portfolio-image"
              alt={project.title}
            />
            <div className="content">
              <p className="title">{project.title}</p>
              <h4 className="description">{project.description}</h4>
              <div className="buttons">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.netlifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Netlify
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        <p style={{ fontSize: "30px", fontStyle: "italic" }}>
          Here are some of the projects that I have done and Hosted on Netlify.
        </p>
        <div>{renderPortfolio(projects)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
