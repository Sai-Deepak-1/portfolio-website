import Hero from "@/components/sections/hero";
import { ProjectCard } from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import MotionWrap from "@/components/ui/motion-wrap";
import { DATA } from "@/data/content"

export default function Home() {
  return (
    <>
      <MotionWrap className="mt-14 flex h-[calc(100dvh-62.5px-56px+50px)] w-full items-center justify-center scroll-smooth">
        <section id="Hero"><Hero /></section>
      </MotionWrap>
      {/* <section id = "AboutMe"><></></section> */}
      {/* <section id="Skills"><Skills /></section> */}
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, from simple
                websites to complex web applications. Here are a few of my
                favorites.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              < ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
