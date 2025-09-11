import Link from "next/link";
import React from "react";
import logo from "../../../assets/logo/logo.jpg";
import { FaRegUser } from "react-icons/fa";

import Image from "next/image";
const NavBar = () => {
  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/"}>About Us</Link>
      </li>
      <li>
        <Link href={"/"}> Dashboard</Link>
      </li>
      <li>
        <Link href={"/"}>Contact Us</Link>
      </li>
    </>
  );
  return (
    <header>
      <nav className="container mx-auto">
        <div className="logo">
          <Image src={logo} alt="Logo" width={300} />
        </div>
        <div className="nav-meus">
          <ul>{links}</ul>
        </div>
        <div className="auth-buttons">
          <button>
            <FaRegUser />
            Sign In
          </button>
          <button>
            <FaRegUser />
            Register
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
