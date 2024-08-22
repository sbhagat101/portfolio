import profile_pic from "../assets/profile_pic.png"
import Typewriter from "typewriter-effect"

function Home() {

  return (
    <main className="container mx-auto px-4 md:px-8 xl:max-w-screen-lg section flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-2xl bg-clip-text bg-gradient2 text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Hi, my name is
            </h1>
            <h1 className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Shiv Bhagat
            </h1>
            <div className="text-2xl bg-clip-text bg-gradient2 text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold ">
                <Typewriter
                options={{
                strings: [
                    'Full Stack Developer',
                    'Programmer',
                    'Software Engineer',
                    'Car Enthusiast',
                    'Sport Enthusiast',
                ],
                autoStart: true,
                loop: true,
                }}
                />
            </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <img className="w-3/4 md:w-1/2 lg:w-2/5" src={profile_pic} alt="Shiv Bhagat" />
        </div>

        <a path="/about" class="absolute block mx-auto text-xl md:mt-96 bottom-0 left-1/2 -ml-10 mt-80">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M21.1716 29.1716C22.7337 27.6095 25.2663 27.6095 26.8284 29.1716L40 42.3431L53.1716 29.1716C54.7337 27.6095 57.2663 27.6095 58.8284 29.1716C60.3905 30.7337 60.3905 33.2663 58.8284 34.8284L42.8284 50.8284C41.2663 52.3905 38.7337 52.3905 37.1716 50.8284L21.1716 34.8284C19.6095 33.2663 19.6095 30.7337 21.1716 29.1716Z"
                fill="#FFFFFF"></path>
            </svg>
        </a>
    </main>


  );
}

export default Home;
