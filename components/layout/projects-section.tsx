import { PROJECTS } from "@/constants";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import { ArrowUpRightIcon, CheckCircleIcon } from "../icons";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  return (
    <section className="scroll-m-20 pb-16 xl:my-24" id="projects">
      <div className="container">
        <p className="mx-auto w-fit bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text font-semibold tracking-widest text-transparent">
          REAL WORD RESULTS
        </p>
        <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl">
          Featured Projects
        </h2>
        <p className="mt-4 text-center text-white/60 md:text-lg xl:text-xl">
          See how I transformed my ideas into reality.
        </p>

        {/* Projects */}
        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="relative z-0 overflow-hidden rounded-3xl bg-gray-800 px-8 pt-8 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:border-2 after:border-white/20 after:content-[''] xl:px-20 xl:pt-16"
            >
              <div className="xl:grid xl:grid-cols-2 xl:gap-x-16">
                <div className="xl:pb-16">
                  <div className="inline-flex gap-x-2 bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text font-bold uppercase tracking-widest text-transparent">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="my-4 border-t-2 border-white/10 md:my-5" />
                  <ul className="flex flex-col gap-y-4">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex items-center gap-x-2 text-sm text-white/60 md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    className={cn(
                      buttonVariants(),
                      "z-20 my-8 w-full font-bold md:w-auto xl:mb-0",
                    )}
                  >
                    View Project <ArrowUpRightIcon className="size-4" />
                  </a>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="-mb-4 w-full max-w-full md:mb-0 xl:absolute xl:h-full xl:w-auto xl:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
