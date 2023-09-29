import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About"
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B1120]">
      <Navbar />
      <div className="bg-[url('/img/bg.jpg')] bg-no-repeat bg-cover mx-auto p-24 lg:p-64 border-b-2 border-b-[#e5e7eb1c]">
        <Hero />
      </div>
      <div className="bg-[url('/img/about.png')] bg-no-repeat bg-cover mx-auto p-24 lg:p-64 border-b-2 border-b-[#e5e7eb1c]">
        <About />
      </div>
    </main>
  );
}
