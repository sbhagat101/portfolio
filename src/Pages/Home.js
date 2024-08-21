import React, { useRef, useEffect } from "react";
import profile_pic from "../assets/profile_pic.png"
import Typewriter from "typewriter-effect"

function Home() {
  const myimageref = useRef();

  return (
    <section class="text-gray-600 body-font h-screen flex bg-svg-constellation-gray-100 relative">
        <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
            <div class="lg:w-2/3 w-full animate-fade-in-down">
            
            <h1 class="md:text-6xl text-3xl mb-2 font-bold text-white tracking-tight leading-tight">
                Hi, my name is
            </h1>
            
            <h1 class="text-2xl bg-clip-text bg-gradient text-transparent md:text-6xl xl:text-6xl xl:leading-snug font-bold">
                Shiv Bhagat
            </h1>
            
            <p class="mt-8 mb-16 md:leading-tight leading-normal tracking-tight text-xl text-white">
                <Typewriter
                options={{
                strings: ['Full Stack Developer', 'Programmer', 'Software Engineer', 'Car Enthusiast', 'Sport Enthusiast'],
                autoStart: true,
                loop: true,
                }}
                />
            </p>
            
            <a class="uppercase rounded-sm bg-gradient font-bold text-white px-8 py-4 mx-auto mr-4 hidden md:inline"
                href="/contact">Contact Me</a>
            </div>
        </div>
        <a href="/about" class="absolute block mx-auto text-xl md:mt-96 bottom-0 left-1/2 -ml-10 mt-80">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M21.1716 29.1716C22.7337 27.6095 25.2663 27.6095 26.8284 29.1716L40 42.3431L53.1716 29.1716C54.7337 27.6095 57.2663 27.6095 58.8284 29.1716C60.3905 30.7337 60.3905 33.2663 58.8284 34.8284L42.8284 50.8284C41.2663 52.3905 38.7337 52.3905 37.1716 50.8284L21.1716 34.8284C19.6095 33.2663 19.6095 30.7337 21.1716 29.1716Z"
                fill="#FFFFFF"></path>
            </svg>
        </a>
    </section>


  );
}

export default Home;
