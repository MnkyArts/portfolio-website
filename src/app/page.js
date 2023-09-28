import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B1120]">
      <Navbar />
      <div className="bg-[url('/img/bg.jpg')] mx-auto p-24 lg:p-64">
        <Hero />
      </div>
    </main>
  );
}
