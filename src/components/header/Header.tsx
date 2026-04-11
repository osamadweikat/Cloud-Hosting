import Link from "next/link";
import { GrTechnology } from "react-icons/gr";

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <Link href="/">
            CLOUD <GrTechnology /> HOSTING
          </Link>
        </div>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/articles">Articles</Link>
          <Link href="about">about</Link>
          <Link href="/admin">Admin Dashboard</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
