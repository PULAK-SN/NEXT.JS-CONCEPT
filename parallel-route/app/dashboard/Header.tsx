import Link from "next/link";

const Header = () => {
  return (
    <div>
      <nav className="py-2 flex gap-4 text-xl border-b-2">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </nav>
    </div>
  );
};

export default Header;
