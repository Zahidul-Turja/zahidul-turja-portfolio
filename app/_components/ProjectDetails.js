import { FaArrowRight } from "react-icons/fa";

import Circles from "./Circles";
import ButtonSecondary from "./ButtonSecondary";
import ProjectLinks from "./ProjectLinks";

import { TechIcons } from "@/public/data/data";

function ProjectDetails({ id, title, description, links, techStack }) {
  console.log(techStack);

  return (
    <div className="hidden min-h-[52vh] w-full rounded-lg bg-primary-900 md:block md:w-[50%]">
      <div className="flex items-center justify-between">
        <div className="mb-1 ml-6 mt-5 flex items-center gap-4">
          {techStack.slice(0, 4).map((tech, index) => (
            <div key={index}>{TechIcons[tech] || null}</div>
          ))}
        </div>
        <Circles
          left="bg-[#74CE95]"
          middle="bg-[#F0CB51]"
          right="bg-[#DA6F6F]"
        />
      </div>

      <div className="mx-auto my-2 h-[78%] w-[92%] rounded-md border border-primary-50 bg-primary-950">
        <div className="title py-2 text-center text-xl font-semibold">
          {title}
        </div>
        <div className="mx-auto px-4 text-justify">
          <p className="text-sm text-primary-50/80">
            {description.slice(0, 600)}{" "}
            {description.length > 600 ? (
              <span className="font-bold tracking-widest">....</span>
            ) : (
              ""
            )}
          </p>
          <ButtonSecondary
            styles={
              "inline-block text-sm font-medium border-b-4 border-secondary-800 my-2"
            }
            type="link"
            isActive={true}
            href={`/projects/${id}`}
          >
            See more <FaArrowRight className="inline" />
          </ButtonSecondary>

          <ProjectLinks
            styles={"justify-end"}
            youtube={links?.youtube}
            github={links?.github}
            live={links?.live}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
