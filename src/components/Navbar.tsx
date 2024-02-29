import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between px-10 py-5 ">
      <div className="text-3xl font-extrabold pb-5 text-blue-700">
        <Link href={"/"}>BlogSite</Link>
      </div>
      <div className="sm:hidden ">
        <hr />
      </div>
      <div className="flex flex-col sm:flex-row font-semibold">
        <div className="px-5">
          <Link href={"/about"}>About</Link>
        </div>
        <div className="px-5">
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div className="px-5">
          <Link href={"/blog"}>Blog</Link>
        </div>
        <div className="px-5">
          <Link href={"/"}>Admin</Link>
        </div>
        <div className="px-5">
          <Link href={"/"}>LogOut</Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
