import React from "react";
import Image from "next/image";

export const Projects = () => {
  return (
    <section className="mx-auto px-24 py-20 lg:py-32 lg:px-52 border-b-2 border-b-[#e5e7eb1c] overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-[37.5rem] bg-gradient-to-b from-[#0a0e1a]"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 relative">
        <div className="col-span-5 mb-6 lg:mb-0 place-self-center lg:place-self-start">
          <Image
            src="/img/liam.jpeg"
            className="rounded-2xl border-2 relative z-10 border-[#e5e7eb1c] shadow-[10px_10px_0px_0px_rgba(255,255,255,.10)]"
            alt="an image of Liam Robinson"
            width={400}
            height={600}
          />
        </div>
        <div className="col-span-7 place-self-center text-center lg:text-left relative z-10">
          <h2 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            What do i do?
          </h2>
          <p className="text-lg lg:text-xl mb-6">
            Currently, I work as a web developer at a small advertising agency.
            In my free time, I work on various projects using{" "}
            <a
              className="underline underline-offset-4 hover:text-green-400"
              href="#portfolio"
            >
              Node.js, Next.js, and alt:V
            </a>
            . Occasionally, you can also watch me on{" "}
            <a
              className="underline underline-offset-4 hover:text-green-400"
              href="https://www.twitch.tv/mnkyarts_galaxy"
            >
              Twitch
            </a>{" "}
            to see what I&apos;m currently working on.
          </p>
          <button className="bg-green-400 hover:bg-transparent text-white hover:text-green-400 font-semibold py-3 px-8 border-2 border-transparent hover:border-green-400 rounded-full mr-5">
            Work with me
          </button>
          <button className="bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-3 px-8 border-2 border-green-400 hover:border-transparent rounded-full">
            My Projects
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full grid-pattern bg-top [mask-image:linear-gradient(0deg,transparent,black)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/projectbg.jpg')] bg-no-repeat bg-cover [mask-image:linear-gradient(-180deg,transparent,black,transparent)]"></div>
    </section>
  );
};

export default Projects;
