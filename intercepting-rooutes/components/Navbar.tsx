import Link from "next/link";

const Navbar = () => {
  return (
    <div className="text-2xl flex items-center justify-around p-10 bg-gray-300">
      <div className="flex gap-10">
        <Link href={"/"}>Home</Link>
        <Link href={"/store"}>Store</Link>
        <Link href={"/about"}>About</Link>
      </div>
      <Link href={"/login"}>Login</Link>
    </div>
  );
};

export default Navbar;
