import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>Sorry Page NOt Found</h1>
      <h1>
        Go Back to <Link href={"/"}>Homepage</Link>
      </h1>
    </div>
  );
};
export default NotFound;
