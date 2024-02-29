import Image from "next/image";
const ParticularPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="bg-[#DAE5FD] h-screen">
      <div
        className="text-4xl font-bold mx-72 py-20
      "
      >
        Blog Serial no. {params.slug}
      </div>
      <div className="flex flex-row mx-40 my-20">
        <div>
          <Image src="/cover.png" alt="Cover Image" height={500} width={400} />
        </div>
        <div className="mx-20">
          <h1 className="font-bold text-2xl">Title</h1>
          <div className="line flex flex-row my-5">
            <div className="avatar rounded-full mx-5 ">
              <Image
                src="/cover.png"
                alt="cover Image"
                height={50}
                width={50}
                className="rounded-full"
              />
            </div>
            <div className="mx-5">
              <h1>Author</h1>
              <h2>Sanddep yadav</h2>
            </div>
            <div className="mx-5">
              <h1>Published Date</h1>
              <h2>24 Feb 2024</h2>
            </div>
          </div>

          <h2>Description</h2>
        </div>
      </div>
    </div>
  );
};
export default ParticularPage;
