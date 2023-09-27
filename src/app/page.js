import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B1120]">
      <Navbar />
      <div className="container mt-24 mx-auto p-24">
        <Hero />
      </div>
    </main>
  );
}
