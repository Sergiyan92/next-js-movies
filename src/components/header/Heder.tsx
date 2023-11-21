"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Heder = () => {
  const pathname = usePathname();
  return (
    <div className=" ">
      <nav className="flex justify-center space-x-4">
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
          top-20
        </Link>
        <Link
          className={`link ${pathname === "/movies" ? "active" : ""}`}
          href="/movies"
        >
          Search-Movies
        </Link>
      </nav>
    </div>
  );
};
export default Heder;
