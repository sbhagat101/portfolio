import React from "react";
import Project from "../Components/Project";
import mandirs from "../assets/project/mandirs.jpg"
import portfolio from "../assets/project/portfolio.jpg"
import titanTalks from "../assets/project/TitanTalks.jpg"
import weather from "../assets/project/weather.jpg"

function Projects() {
    const projectDetails = [
        {
          title: "Portfolio",
          image: portfolio,
          description: `An portfolio site to showcase my experience and projects`,
          techstack: "React JS, HTML, Tailwind CSS",
          previewLink: "https://sbhagat101.github.io/portfolio",
          githubLink: "https://github.com/sbhagat101/portfolio",
        },
        {
            title: "Mandirs",
            image: mandirs,
            description: `This is an ios app which showcases BAPS Temples across North America`,
            techstack: "Swift",
            previewLink: "https://github.com/sbhagat101/Mandirs?tab=readme-ov-file#simulation",
            githubLink: "https://github.com/sbhagat101/Mandirs",
        },
        {
          title: "Weather Dashboard",
          image: weather,
          description: `An Weather Dashboard to view weather in any given city and also view the next 5 day forecast`,
          techstack: "React JS, HTML, CSS, Axios",
          previewLink: "https://sbhagat101.github.io/WeatherDashboard/",
          githubLink: "https://github.com/sbhagat101/WeatherDashboard",
        },
        {
          title: "Titan Talks",
          image: titanTalks,
          description: `An Full-stack web application designed to faciliate networking among CSUF students`,
          techstack: "React JS, HTML, Tailwind CSS",
          previewLink: "https://github.com/sbhagat101/titan-talks-2.0",
          githubLink: "https://github.com/sbhagat101/titan-talks-2.0",
        }
      ];
      
  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl bg-clip-text bg-gradient2 text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
        {React.Children.toArray(
            projectDetails.map(
              ({ title, image, description, techstack, previewLink, githubLink }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
