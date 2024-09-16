"use client";

import { useParams } from "next/navigation";
import { Projects } from "@/public/data/data";
import VideoPlayer from "@/app/_components/VideoPlayer";
import Image from "next/image";

function Page() {
  const { id } = useParams();
  const project = Projects[id];

  return (
    <div className="mx-72 px-10 py-24">
      {project.video && <VideoPlayer video={project.video} />}
      <h1 className="text-4xl font-bold">{project.title}</h1>
      {project.image && !project.video && (
        <div className="md:max-h-[40rem] md:max-w-full">
          <Image
            src={project.image}
            alt={project.title}
            placeholder="blur"
            blurDataURL={project.image}
            layout="responsive" // Makes the image responsive
            width={20}
            height={20}
            className="mx-auto my-6 h-full w-full rounded-lg object-cover object-top"
          />
        </div>
      )}
    </div>
  );
}

export default Page;
