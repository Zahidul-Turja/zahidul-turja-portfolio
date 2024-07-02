import ProjectCard from "../ProjectCard";
import ProjectDetails from "../ProjectDetails";
import ProjectImage from "../ProjectImage";

function Projects() {
  return (
    <div className="w-full py-14 text-center">
      <h2 className="text-3xl font-bold my-8">Projects</h2>

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
