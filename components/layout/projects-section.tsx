import { PROJECTS } from "@/constants";

import ProjectCard from "../project-card";
import SectionHeader from "../section-header";

export default function ProjectsSection() {
  return (
    <section className="scroll-m-20 pb-16 xl:my-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="real word results"
          title="featured projects"
          description="see how i transformed my ideas into reality"
        />

        {/* Projects */}
        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
