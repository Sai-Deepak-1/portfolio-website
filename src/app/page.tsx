import Contact from "@/components/sections/contact/contact";
import Hero from "@/components/sections/hero/hero";
import Projects from "@/components/sections/projects/projects";
import Skills from "@/components/sections/skills/skills";
import MotionWrap from "@/components/ui/motion-wrap";

export default function Home() {
  return (
    <>
    <MotionWrap className="mt-14 flex h-[calc(100dvh-62.5px-56px+50px)] w-full items-center justify-center scroll-smooth">
    <section id = "Hero"><Hero/></section>
    </MotionWrap>
    {/* <section id = "AboutMe"><></></section> */}
    <section id = "Skills"><Skills/></section>
    {/* <section id = "Projects"><Projects/></section> */}
    </>
  );
}
