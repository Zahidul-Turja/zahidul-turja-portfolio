import Image from "next/image";

function ProjectImage() {
  return (
    <div className="relative mr-3 h-[50vh] w-[40%]">
      <div className="shadow-purple-glow absolute inset-0 translate-x-3 translate-y-3 rounded-lg bg-secondary-800"></div>
      <Image
        src="/wild-oasis-client.png"
        fill
        className="shadow-purple-glow rounded-lg object-cover"
        alt="project-cover"
      />
    </div>
  );
}

export default ProjectImage;
