import Image from "next/image";

function ProjectImage({ image }) {
  return (
    <div className="relative mr-3 h-48 w-full md:h-[50vh] md:w-[40%]">
      <div className="absolute inset-0 hidden translate-x-3 translate-y-3 rounded-lg bg-secondary-800 md:block"></div>
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
