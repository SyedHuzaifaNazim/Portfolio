import Image from "next/image";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <>
    <main>
      <Intro />
      <About />
    </main>
    </>  
  );
}
