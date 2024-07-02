import Image from "next/image";

function ProjectImage() {
  return (
    <div className="relative w-[40%] h-[50vh] mr-3">
      <div className="absolute inset-0 bg-secondary-800 rounded-lg translate-x-3 translate-y-3"></div>
      <Image
        src="/wild-oasis-client.png"
        fill
        className="object-cover rounded-lg"
        alt="project-cover"
      />
    </div>
  );
}

export default ProjectImage;
