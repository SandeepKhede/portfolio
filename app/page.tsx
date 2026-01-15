import Image from "next/image";
import ScrollWrapper from "@/components/ScrollWrapper";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <ScrollWrapper />
      <Projects />
      <Contact />
    </main>
  );
}
