import PostCard from "@/components/PostCard";

const Page = () => {
  return (
    <div className="mx-20 my-20">
      <h1 className="text-3xl font-bold">All Blog PAge</h1>
      <div className="flex flex-row flex-wrap">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};
export default Page;
