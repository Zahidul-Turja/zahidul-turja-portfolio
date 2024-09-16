"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { MdCircle } from "react-icons/md";
import { BlogDetails as blogs } from "@/public/data/data";
import SubPara from "@/app/_components/SubPara";

function Page() {
  const { id } = useParams();
  const blog = blogs[id];

  return (
    <div className="mx-72 px-10 py-24">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <span className="block text-sm font-normal text-white">{blog.date}</span>
      <div className="my-1 flex gap-3 text-secondary-600">
        {blog.tags.map((tag, i) => (
          <span className="text-xl font-bold" key={tag}>
            {tag}
            {i < blog.tags.length - 1 && (
              <MdCircle className="ml-3 inline h-3 w-3" />
            )}
          </span>
        ))}
      </div>

      {blog.image && (
        <div className="md:max-h-[40rem] md:max-w-full">
          <Image
            src={blog.image}
            alt={blog.title}
            placeholder="blur"
            blurDataURL={blog.image}
            layout="responsive" // Makes the image responsive
            width={20}
            height={20}
            className="mx-auto my-6 h-full w-full rounded-lg object-cover object-top"
          />
        </div>
      )}
      <p className="my-6 text-justify text-lg font-medium">
        {blog.description}
      </p>

      {/* Subs */}
      {blog.subs &&
        blog.subs.map((sub) => (
          <SubPara
            key={sub.title}
            title={sub.title}
            para={sub.para}
            image={sub.image}
          />
        ))}
    </div>
  );
}

export default Page;
