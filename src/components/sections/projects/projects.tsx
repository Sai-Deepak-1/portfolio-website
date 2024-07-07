import React from "react";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { DATA } from "@/data/content";

const Project: React.FC = () => {
  return (
    <div
      id="ProjectSection"
      className="flex flex-col space-y-28 w-full py-32 px-4 md:px-16 lg:px-24 2xl:px-72"
    >
      {/* Title */}
      <div data-aos="fade-up" className="flex flex-row items-center">
        <ArrowRight className="flex-none h-6 w-6 text-primary" />
        <span className="text-primary font-sans text-xl ml-2">03.</span>
        <h2 className="font-bold tracking-wider text-2xl ml-2">
          Some Things I&apos;ve Built
        </h2>
        <div className="bg-gray-400 h-[0.2px] w-full ml-4"></div>
      </div>

      {/* Projects */}
      <div className="space-y-28">
        {DATA.project.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`relative grid md:grid-cols-12 w-full min-h-[400px] ${index % 2 === 0 ? "md:grid-flow-row-dense" : ""}`}
          >
            {/* Project Info */}
            <div
              className={`z-20 md:col-span-6 md:row-start-1 ${
                index % 2 === 0 ? "md:col-start-1" : "md:col-start-7"
              }`}
            >
              <div
                className={`flex flex-col h-full justify-center ${
                  index % 2 === 0 ? "md:items-start md:text-left" : "md:items-end md:text-right"
                }`}
              >
                <span className="text-primary text-sm mb-2">Featured Project</span>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="bg-tertiary p-6 rounded-lg mb-4 shadow-lg">
                  <p className="text-gray-500 dark:text-white">{project.description}</p>
                </div>
                <ul className="flex flex-wrap mb-4 gap-x-4">
                  {project.tags.map((tag, tagIndex) => (
                    <li key={tagIndex} className="text-gray-400 text-sm">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-4">
                  <Link href={project.links.github}>
                    <Github className="w-6 h-6 text-gray-400 hover:text-primary" />
                  </Link>
                  <Link href={project.links.external}>
                    <ExternalLink className="w-6 h-6 text-gray-400 hover:text-primary" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Image */}
            <div
              className={`z-10 md:col-span-6 ${
                index % 2 === 0 ? "md:col-start-7" : "md:col-start-1"
              }`}
            >
              <div className="relative h-full">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-primary opacity-50 rounded-lg"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
