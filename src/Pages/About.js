import React from "react";
import resume from "../assets/resume/Shiv_Bhagat's_Resume.pdf"

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
        
        <section>
            <h1 className="text-2xl bg-clip-text bg-gradient2 text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            About Me
            </h1>
            <p className="text-white bg-clip-text bg-gradient2 text-transparent py-8 lg:max-w-3xl">
            Hello! My name is Shiv a software engineer early in his career.   
            My programming journey started back in high school when i took an computer science class where I learned Python.
            Fast-Forward to today, and I've had the privilege of working for one biggest defense Contractor in Raytheon. 
            Actively seeking new opportunities in Southern California.
            </p>
        </section>

        <section>
            <h1 className="text-2xl bg-clip-text bg-gradient2 text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-10">Work Experiences & Education</h1>
            <div class="relative border-l border-gray-200">

    
            <div class="mb-8 ml-4">
                <div class="absolute w-3 h-3 bg-gradient rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time class="text-sm font-semibold leading-none text-white">March 2023 - July 2024</time>
                <h3 class="text-lg font-semibold text-white">Software Engineer</h3>
                <p class="text-base font-normal text-white">Raytheon</p>
                <p class="text-base font-normal text-white">El Segundo, CA</p>
                <div className="btn bg-gradient text-white font-bold text-xs inline-block rounded-3xl px-3 py-1 min-w-fit">Full-Time</div>
            </div>

        
            <div class="mb-8 ml-4">
                <div class="absolute w-3 h-3 bg-gradient rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time class="text-sm font-semibold leading-none text-white">June 2022 - August 2022</time>
                <h3 class="text-lg font-semibold text-white">Software Engineer Intern</h3>
                <p class="text-base font-normal text-white">Vara Now</p>
                <p class="text-base font-normal text-white">Glendale, CA</p>
                <div className="btn bg-gradient text-white font-bold text-xs inline-block rounded-3xl px-3 py-1 min-w-fit">Internship</div>
            </div>

            
            <div class="mb-8 ml-4">
                <div class="absolute w-3 h-3 bg-gradient rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time class="text-sm font-semibold leading-none text-white">August 2019 - December 2022</time>
                <h3 class="text-lg font-semibold text-white">Bachelors in Computer Science</h3>
                <p class="text-base font-normal text-white">California State University, Fullerton</p>
                <p class="text-base font-normal text-white">Fullerton, CA</p>
                <div className="btn bg-gradient text-white font-bold text-xs inline-block rounded-3xl px-3 py-1 min-w-fit">Student</div>
            </div>

            
            <div class="mb-8 ml-4">
                <div class="absolute w-3 h-3 bg-gradient rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time class="text-sm font-semibold leading-none text-white">August 2015 - June 2019</time>
                <h3 class="text-lg font-semibold text-white">High School Diploma</h3>
                <p class="text-base font-normal text-white">Anderson Clark Magnet High School</p>
                <p class="text-base font-normal text-white">La Crescenta, CA</p>
                <div className="btn bg-gradient text-white font-bold text-xs inline-block rounded-3xl px-3 py-1 min-w-fit">Student</div>
            </div>

            </div>
        </section>

        <section className="flex flex-col items-start">
            <h1 className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold bg-clip-text bg-gradient2 text-transparent">
                Download Resume
            </h1>
            <a 
                href={resume} download={"Shiv Bhagat's Resume V2"}
                className="bg-gradient hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 mt-4"
            >
                Download Resume
            </a>
        </section>


    </main>
  );
}

export default About;
