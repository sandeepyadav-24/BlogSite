import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 py-48 bg-[#DAE5FD] ">
      <div className="mx-40">
        <h1 className="text-6xl font-bold center my-3">
          Where developer blogs meet community power!
        </h1>
        <h1>
          Create and grow your developer blog, newsletter, or team engineering
          blog effortlessly with Hashnode. Level up your writing using powerful
          AI features!
        </h1>
      </div>
      <button className="bg-blue-700 text-white px-3 py-2 rounded-md text-xl">
        Join the Community
      </button>
    </main>
  );
}
