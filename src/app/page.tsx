import Contact from "@/components/sections/contact/contact";
import Hero from "@/components/sections/hero/hero";
import Projects from "@/components/sections/projects/projects";
import Skills from "@/components/sections/skills/skills";

export default function Home() {
  return (
    <>
    <section id = "Hero"><Hero/></section>
    {/* <section id = "AboutMe"><></></section> */}
    <section id = "Skills"><Skills/></section>
    {/* <section id = "Projects"><Projects/></section> */}
    <section id = "ContactMe"><Contact/></section>
    </>
  );
}
