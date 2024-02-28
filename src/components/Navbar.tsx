import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-10 py-5 ">
      <div className="text-3xl font-extrabold">
        <Link href={"/"}>BlogSite</Link>
      </div>
      <div className="flex flex-row">
        <div className="px-5">
          <Link href={"/about"}>About</Link>
        </div>
        <div className="px-5">
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div className="px-5">
          <Link href={"/blog"}>Blog</Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
