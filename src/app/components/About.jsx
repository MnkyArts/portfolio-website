"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";

const About = () => {
  const target = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end center"],
  });

  const imgPos = useSpring(useTransform(scrollYProgress, [0, 0.5], [-735, 0]), {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const textPos = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1100, 0]),
    {
      stiffness: 120,
      damping: 30,
      restDelta: 0.001,
    }
  );

  const opacity = useTransform(scrollYProgress, [0, 0.5], [-0.3, 1]);

  return (
    <section
      ref={target}
      className="mx-auto px-24 py-20 lg:py-52 lg:px-64 overflow-hidden"
    >
      <motion.div
        style={{ opacity }}
        className="grid grid-cols-1 lg:grid-cols-12 relative"
      >
        <motion.div
          style={{ x: imgPos }}
          className="col-span-5 mb-6 z-10 lg:mb-0 place-self-center lg:place-self-start"
        >
          <Image
            src="/img/liam.jpeg"
            className="rounded-2xl border-2 relative border-[#e5e7eb1c] shadow-[10px_10px_0px_0px_rgba(255,255,255,.10)]"
            alt="an image of Liam Robinson"
            width={400}
            height={600}
          />
        </motion.div>
        <motion.div
          style={{ x: textPos }}
          className="col-span-7 place-self-center text-center lg:text-left relative z-10"
        >
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
        </motion.div>
        <Image
          src="/img/rectangle.svg"
          className="absolute -left-96 -top-32 z-0 left"
          alt="gradient rectangle"
          width={600}
          height={600}
        />
        <Image
          src="/img/circle.svg"
          className="absolute -right-96 -bottom-48 z-0"
          alt="gradient circle"
          width={600}
          height={600}
        />
      </motion.div>
    </section>
  );
};

export default About;
