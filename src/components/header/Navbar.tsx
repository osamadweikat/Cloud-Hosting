import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import module from "./header.module.css";

const Navbar = () => {
  return (
    <nav className={module.navbar}>
      <div>
        <Link href="/" className={module.logo}>
          CLOUD <GrTechnology /> HOSTING
        </Link>
      </div>
      <ul className={module.navLinks}>
        <Link className={module.navLink} href="/">
          Home
        </Link>
        <Link className={module.navLink} href="/articles">
          Articles
        </Link>
        <Link className={module.navLink} href="about">
          about
        </Link>
        <Link className={module.navLink} href="/admin">
          Admin Dashboard
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
