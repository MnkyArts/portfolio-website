"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      className="bg-[url('/img/bg.jpg')] bg-no-repeat bg-cover mx-auto px-24 py-20 lg:py-52 lg:px-64 border-b-2 border-b-[#e5e7eb1c]"
      id="start"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="bg-gradient-to-r from-green-400 via-teal-300 to-blue-400 mb-4 text-4xl lg:text-6xl font-extrabold bg-clip-text text-transparent">
            <TypeAnimation
              sequence={[
                "Hey there! 👋",
                1000,
                "¡Hola! 👋",
                1000,
                "Salut! 👋",
                1000,
                "Hallo! 👋",
                1000,
                "Ciao! 👋",
                1000,
                "Olá! 👋",
                1000,
                "Привет! 👋",
                1000,
                "こんにちは！👋",
                1000,
              ]}
              wrapper="span"
              speed={35}
              repeat={Infinity}
            />
          </h1>
          <p className="text-lg lg:text-xl mb-6">
            I&apos;m Liam Robinson, a graphic designer and web developer from
            Lüneburg, Germany, with 8+ years of experience. I excel in logo,
            web, and print design, offering effective and efficient solutions
            for your design needs.
          </p>
          <div>
            <a href="#contact" className="inline-block">
              <Image
                src="/img/twitter.svg"
                alt="Twitter Logo"
                width={26}
                height={26}
              />
            </a>
            <a href="#contact" className="inline-block ml-4">
              <Image
                src="/img/github.svg"
                alt="Instagram Logo"
                width={26}
                height={26}
              />
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-end mt-4 lg:mt-0">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <div className="text text-white">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path
                  id="circlePath"
                  d="
                    M 10, 50
                    a 40,40 0 1,1 80,0
                    40,40 0 1,1 -80,0
                  "
                ></path>
                <text>
                  <textPath href="#circlePath">
                    Web Developer – Graphic Designer – Backend Developer –{" "}
                  </textPath>
                </text>
              </svg>
            </div>
            <Image
              src="/img/avatar.jpg"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="an image of Liam Robinson"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
