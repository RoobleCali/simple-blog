import Link from "next/link";
function Header() {
  return (
    <div className="flex items-center justify-between pt-2 ">
      {/* logo */}
      <div className="text-2xl font-bold">
        <h1>shakuur ally</h1>
      </div>
      <div className="flex items-center gap-6 font-medium text-gray-600 ">
        <Link href="/">Home</Link>
        <Link href="/Blog">Blogs</Link>
      </div>
    </div>
  );
}

export default Header;
