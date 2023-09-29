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
            <div className="col-span-7 place-self-center text-center lg:text-left">
                <h2 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                    Liam Robinson
                </h2>
                <p className="text-lg lg:text-xl mb-6">
                    I&apos;m Liam Robinson, a graphic designer and web developer from
                    Lüneburg, Germany, with 10+ years of experience. I excel in logo,
                    web, and print design, offering effective and efficient solutions
                    for your design needs.
                </p>
            </div>
            <Image
                src="/img/rectangle.svg"
                className="absolute -left-28 -top-20 z-0"
                alt="gradient rectangle"
                width={400}
                height={400}
            />
            <Image
                src="/img/circle.svg"
                className="absolute -right-28 -bottom-20 z-0"
                alt="gradient rectangle"
                width={200}
                height={200}
            />
        </div>
    </section>
  )
}

export default About