import React from 'react'
import Image from "next/image";

const About = () => {
  return (
    <section>
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
                Currently, I work as a web developer at a small advertising agency. In my free time, I work on various projects using Node.js, Next.js, and alt:V. Occasionally, you can also follow me on Twitch to see what I'm currently working on.
                </p>
                <button class="bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-3 px-8 border-2 border-green-400 hover:border-transparent rounded-full">
                    Work with me
                </button>
            </div>
            <Image
                src="/img/rectangle.svg"
                className="absolute -left-96 -top-32 z-0 left"
                alt="gradient rectangle"
                width={600}
                height={600}
            />
            <Image
                src="/img/circle.svg"
                className="absolute -right-96 -bottom-52 z-0"
                alt="gradient circle"
                width={600}
                height={600}
            />
        </div>
    </section>
  )
}

export default About