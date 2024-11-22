import HomePage from "@/components/HomePage/HomePage";
import Skills from "@/components/HomePage/Skills";
import MyProjects from "@/components/HomePage/MyProjects";
import Contact from "@/components/HomePage/Contact";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Skills />
      <MyProjects />
      <Contact /> 
    </div>
  );
}
