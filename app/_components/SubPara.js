import Image from "next/image";

function SubPara({ title, para, image }) {
  return (
    <div className="my-8">
      <h2 className="text-3xl font-bold capitalize">{title}</h2>
      {image && (
        <Image
          src={image}
          alt={title}
          placeholder="blur"
          blurDataURL={image}
          layout="responsive" // Makes the image responsive
          width={20}
          height={20}
          className="mx-auto my-6 rounded-lg object-cover object-top md:max-h-[40rem] md:max-w-full"
        />
      )}
      <p className="my-2 text-justify text-lg font-medium">{para}</p>
    </div>
  );
}

export default SubPara;
