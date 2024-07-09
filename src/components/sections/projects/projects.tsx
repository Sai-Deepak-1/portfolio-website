import React from "react";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { DATA } from "@/data/content";

const Project: React.FC = () => {
  return (
    <div
      id="ProjectSection"
      className="flex flex-col space-y-28 w-full py-10 px-4 md:px-16 lg:px-24 2xl:px-72"
    >
      {/* Title */}
      <div
        data-aos="fade-up"
        className="flex flex-col sm:flex-row items-center mb-8"
      >
        <div className="flex items-center mb-4 sm:mb-0">
          <h2 className="font-bold tracking-wider text-2xl ml-2 text-slate-800 dark:text-slate-200 whitespace-nowrap">
            Some Things I&apos;ve Built
          </h2>
        </div>
        <div className="bg-slate-400 dark:bg-slate-600 h-[0.2px] w-full sm:ml-4 flex-grow"></div>
      </div>

      {/* Projects */}
      <div className="space-y-28">
        {DATA.project.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`relative flex flex-col-reverse ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } w-full min-h-[400px]`}
          >
            {/* Project Image */}
            <div className="md:w-3/5 h-64 md:h-auto relative">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-emerald-600 dark:bg-emerald-800 opacity-20 rounded-lg"></div>
            </div>

            {/* Project Info */}
            <div
              className={`md:w-2/5 p-6 flex flex-col justify-center ${
                index % 2 === 0 ? "md:pl-8" : "md:pr-8"
              }`}
            >
              <span className="text-emerald-600 dark:text-emerald-400 text-sm mb-2">
                Featured Project
              </span>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                {project.title}
              </h3>
              <div className="mb-4 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                <p className="text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
              </div>
              <ul className="flex flex-wrap mb-4 gap-x-4">
                {project.tags.map((tag, tagIndex) => (
                  <li
                    key={tagIndex}
                    className="text-slate-500 dark:text-slate-400 text-sm"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <Link href={project.links.github}>
                  <Github className="w-6 h-6 text-slate-400 transition duration-500 hover:scale-125 hover:text-emerald-600 dark:hover:text-emerald-400" />
                </Link>
                <Link href={project.links.external}>
                  <ExternalLink className="w-6 h-6 text-slate-400 transition duration-500 hover:scale-125 hover:text-emerald-600 dark:hover:text-emerald-400" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
