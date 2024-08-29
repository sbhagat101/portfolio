import React from "react";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  return (
    <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
      <img src={image} alt="" loading="lazy" />
      <div className="dark:bg-dark-card p-4">
        <h1 className="dark:text-white font-semibold text-lg pt-1 text-white">{title}</h1>
        <p className="text-white pt-4 font-light">{description}</p>
        <h3 className="text-white font-medium pt-4">
          Tech Stack : <span className="font-tight">{techstack}</span>
        </h3>
        <div className="flex justify-between items-center mt-5 text-white">
          <div className="flex items-center">
            <a
              href={previewLink}
              target="_blank"
              rel="noreferrer noopener"
              className="underline pl-2 font-light text-white"
            >
              Live Preview
            </a>
          </div>
          <div className="flex items-center">
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="underline pl-2 font-light text-white"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Project;