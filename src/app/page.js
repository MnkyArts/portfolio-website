import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B1120]">
      <Navbar />
      <div className="bg-[url('/img/bg.jpg')] bg-no-repeat bg-cover mx-auto px-24 py-20 lg:py-52 lg:px-64 border-b-2 border-b-[#e5e7eb1c]">
        <Hero />
      </div>
      <div className="mx-auto px-24 py-20 lg:py-52 lg:px-64 overflow-hidden">
        <About />
      </div>
      <div className="mx-auto px-24 py-20 lg:py-32 lg:px-64 border-b-2 border-b-[#e5e7eb1c] overflow-hidden relative">
        <div className="absolute top-0 inset-x-0 h-[37.5rem] bg-gradient-to-b from-[#0a0e1a]"></div>
        <Projects />
        <div className="absolute top-0 left-0 w-full h-full grid-pattern bg-top [mask-image:linear-gradient(0deg,transparent,black)]"></div>
      </div>
    </main>
  );
}
