"use client";
import React, {useEffect} from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const RotateText = () => {
  useEffect(() => {
    const text = document.querySelector('.text p');
    if (text) {
      text.innerHTML = text.innerText
        .split("")
        .map(
          (char, i) => `<span style="transform:rotate(${i * 3.9}deg)">${char}</span>`
        )
        .join("");
    }
  }, []);

  return (
    <div className="text text-white">
      <p>
        Web Developer – Graphic Designer – Backend Developer –
      </p>
    </div>
  );
};

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="bg-gradient-to-r from-green-400 via-teal-300 to-blue-400 to-white mb-4 text-4xl lg:text-6xl font-extrabold bg-clip-text text-transparent">
            <TypeAnimation
              sequence={[
                "Hey there!👋",
                1000,
                "¡Hola!👋",
                1000,
                "Salut!👋",
                1000,
                "Hallo!👋",
                1000,
                "Ciao!👋",
                1000,
                "Olá!👋",
                1000,
                "Привет!👋",
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
            Lüneburg, Germany, with 10+ years of experience. I excel in logo,
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
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[var(--d-outer)] h-[var(--d-outer)] lg:w-[var(--d-outer)] lg:h-[var(--d-outer)] relative">
          <RotateText />
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
