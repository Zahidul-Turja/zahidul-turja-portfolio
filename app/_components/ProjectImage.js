import Image from "next/image";

function ProjectImage({ image }) {
  return (
    <div className="relative mr-3 h-[50vh] w-[40%]">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg bg-secondary-800"></div>
      <Image
        src={image}
        fill
        className="rounded-lg object-cover"
        alt="project-cover"
      />
    </div>
  );
}

export default ProjectImage;
