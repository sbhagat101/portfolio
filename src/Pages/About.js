import React from "react";


function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
        
        <section>
            <h1 className="text-2xl bg-clip-text bg-gradient2 text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            About Me
            </h1>
            <p className="text-content bg-clip-text bg-gradient2 text-transparent py-8 lg:max-w-3xl">
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
                <div class="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time class="text-sm font-semibold leading-none text-gray-400">March 2023 - July 2024</time>
                <h3 class="text-lg font-semibold text-gray-400">Software Engineer</h3>
                <p class="text-base font-normal text-gray-500">Raytheon</p>
                <p class="text-base font-normal text-gray-500">El Segundo, CA</p>
            </div>

        
            <div class="mb-8 ml-4">
                <div class="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time class="text-sm font-semibold leading-none text-gray-400">June 2022 - August 2022</time>
                <h3 class="text-lg font-semibold text-gray-400">Software Engineer Intern</h3>
                <p class="text-base font-normal text-gray-500">Vara Now</p>
                <p class="text-base font-normal text-gray-500">Glendale, CA</p>
            </div>

            
            <div class="mb-8 ml-4">
                <div class="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time class="text-sm font-semibold leading-none text-gray-400">August 2019 - December 2022</time>
                <h3 class="text-lg font-semibold text-gray-400">Student</h3>
                <p class="text-base font-normal text-gray-500">California State University, Fullerton</p>
                <p class="text-base font-normal text-gray-500">Fullerton, CA</p>
            </div>

            
            <div class="mb-8 ml-4">
                <div class="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time class="text-sm font-semibold leading-none text-gray-400">August 2015 - June 2019</time>
                <h3 class="text-lg font-semibold text-gray-400">Student</h3>
                <p class="text-base font-normal text-gray-500">Anderson Clark Magnet High School</p>
                <p class="text-base font-normal text-gray-500">La Crescenta, CA</p>
            </div>

            </div>
      </section>
    </main>
  );
}

export default About;
