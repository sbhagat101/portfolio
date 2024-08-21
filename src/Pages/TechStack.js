import React from "react";
import html from "../assets/techstack/html.png";
import css from "../assets/techstack/css.png";
import js from "../assets/techstack/js.png";
import react from "../assets/techstack/react.png";
import tailwind from "../assets/techstack/tailwind.png";
import vscode from "../assets/techstack/vscode.png";
import github from "../assets/techstack/github.png";
import git from "../assets/techstack/git.png";
import npm from "../assets/techstack/npm.png";
import mysql from "../assets/techstack/mysql.png";
import firebase from "../assets/techstack/firebase.png";

function Technologies() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl bg-clip-text bg-gradient2 text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-white py-2 lg:max-w-3xl font-bold">
          Technologies I've experinece with
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="html" />
        <img src={css} title="CSS" alt="CSS" />
        <img src={js} title="JavaScript" alt="JavaScript" />
        <img src={react} title="React" alt="React" />
        <img src={tailwind} title="Tailwind CSS" alt="tailwind CSS" />
        <img src={mysql} title="mySql" alt="mySql" />
        <img src={firebase} title="google firebase" alt="google firebase" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 bg-clip-text bg-gradient2 text-transparent  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={npm} title="NPM" alt="NPM" />
      </section>
    </main>
  );
}

export default Technologies;
