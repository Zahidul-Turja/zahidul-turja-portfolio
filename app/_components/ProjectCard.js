import ProjectDetails from "./ProjectDetails";
import ProjectImage from "./ProjectImage";

function ProjectCard({ project, index }) {
  return (
    <div className="mx-auto mb-10 mt-16 flex w-[85vw] flex-col gap-12 border-b-2 pb-10 md:mb-32 md:flex-row md:gap-[5vw] md:border-none md:pb-0">
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
        </>
      )}
    </div>
  );
}

export default ProjectCard;
