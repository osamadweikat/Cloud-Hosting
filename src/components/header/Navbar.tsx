"use client";
import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import module from "./header.module.css";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={module.navbar}>
      <div>
        <Link href="/" className={module.logo}>
          CLOUD <GrTechnology /> HOSTING
        </Link>
        <div className={module.menu}>
          {toggle ? (
            <IoMdClose onClick={() => setToggle((prev) => !prev)} />
          ) : (
            <AiOutlineMenu onClick={() => setToggle((prev) => !prev)} />
          )}
        </div>
      </div>
      <div
        className={module.navLinksWrapper}
        style={{
          clipPath: (toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)") || "",
        }}
      >
        <ul className={module.navLinks}>
          <Link
            onClick={() => setToggle(false)}
            className={module.navLink}
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setToggle(false)}
            className={module.navLink}
            href="/articles"
          >
            Articles
          </Link>
          <Link
            onClick={() => setToggle(false)}
            className={module.navLink}
            href="about"
          >
            about
          </Link>
          <Link
            onClick={() => setToggle(false)}
            className={module.navLink}
            href="/admin"
          >
            Admin Dashboard
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
