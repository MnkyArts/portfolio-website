import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B1120]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
