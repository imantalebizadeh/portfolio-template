import Image, { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

import { ArrowUpRightIcon, CheckCircleIcon } from "./icons";
import { buttonVariants } from "./ui/button";
import Card from "./ui/card";

export type Project = {
  company: string;
  year: string;
  title: string;
  results: { title: string }[];
  link: string;
  image: StaticImageData;
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Card
      className="sticky px-8 pt-8 xl:px-20 xl:pt-16"
      style={{ top: `calc(64px + ${index * 40}px)` }}
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
    </Card>
  );
}
