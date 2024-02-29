import Image from "next/image";
import Link from "next/link";
const PostCard = () => {
  return (
    <div className="mx-5 my-5 rounded-lg bg-[#EEECFD] px-4 py-4">
      <Image
        src="/cover.png"
        alt="cover Image"
        width={300}
        height={400}
        className="rounded-md"
      />
      <h1>Title</h1>
      <h2>Desc</h2>
      <h1>
        <Link href={"/blog/post"}>Read more</Link>
      </h1>
    </div>
  );
};
export default PostCard;
