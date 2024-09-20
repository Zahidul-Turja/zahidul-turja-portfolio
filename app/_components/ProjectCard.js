import Link from "next/link";
import ProjectDetails from "./ProjectDetails";
import ProjectImage from "./ProjectImage";

function ProjectCard({ project, index }) {
  return (
    <div className="mx-auto mb-10 mt-16 flex w-[85vw] flex-col gap-0 rounded-lg border bg-gray-950/65 p-3 md:mb-32 md:flex-row md:gap-[5vw] md:border-none md:bg-transparent md:pb-0">
      {index % 2 === 0 ? (
        <>
          <ProjectImage image={project.image} />
          <ProjectDetails
            id={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            links={project.links}
          />

          <Details
            id={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            links={project.links}
          />
        </>
      ) : (
        <>
          <ProjectDetails
            id={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            links={project.links}
          />
          <ProjectImage image={project.image} />

          <Details
            id={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            links={project.links}
          />
        </>
      )}
    </div>
  );
}

export default ProjectCard;

function Details({ id, title, description, techStack, links }) {
  return (
    <Link
      href={`/projects/${id}`}
      className="block py-2 text-left text-primary-50 md:hidden"
    >
      <h2 className="my-2 text-lg font-bold leading-5">{title}</h2>
      <p className="prose prose-invert text-justify text-sm">
        {description.slice(0, 200)}{" "}
        {description.length > 200 ? (
          <span className="font-bold tracking-widest">....</span>
        ) : (
          ""
        )}
      </p>
    </Link>
  );
}
