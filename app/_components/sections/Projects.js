import ProjectCard from "../ProjectCard";
import ProjectDetails from "../ProjectDetails";
import ProjectImage from "../ProjectImage";

function Projects() {
  return (
    <div className="w-full py-14">
      <h2 className="my-8 text-center text-4xl font-bold">Projects</h2>

      <ProjectCard>
        <ProjectImage />
        <ProjectDetails />
      </ProjectCard>
      <ProjectCard>
        <ProjectDetails />
        <ProjectImage />
      </ProjectCard>
    </div>
  );
}

export default Projects;
