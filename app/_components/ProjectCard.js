import ProjectDetails from "./ProjectDetails";
import ProjectImage from "./ProjectImage";

function ProjectCard({ project, index }) {
  return (
    <div className="mx-auto mb-32 mt-16 flex w-[85vw] gap-[5vw]">
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
