"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo/logo.svg";
import { FaTimes, FaUser } from "react-icons/fa";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { FaBars } from "react-icons/fa";
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
  const [open, setOpen] = useState(false);

  // sticky code statd
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    // handler: set sticky if scrolled more than 50px
    const onScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    // use passive listener for better scroll performance
    window.addEventListener("scroll", onScroll, { passive: true });

    // run once to set initial state (if page opened not at top)
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // sticky code ends
  return (
    <header
      className={`py-6  fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        isSticky
          ? "bg-white shadow-md dark:bg-dark-primary/80" // scroll করলে bg আসবে
          : "bg-transparent " // initial transparent
      }`}
    >
      <nav className="container mx-auto hidden lg:flex items-center justify-between gap-6">
        <div className="logo">
          <Image src={logo} alt="Logo" width={200} />
        </div>
        <div className="nav-meus">
          <ul className="flex items-center gap-6">{links}</ul>
        </div>
        <div className="auth-buttons flex items-center">
          <button className="bg-custom-accent-primary text-white py-[7px] px-4 flex items-center rounded-[55px] text-sm font-semibold gap-2 mr-3">
            <FaUser />
            Sign In
          </button>
          <button className="bg-custom-accent-secondary text-white py-[7px] px-4 flex items-center rounded-[55px] text-sm font-semibold gap-2">
            <FaUser />
            Register
          </button>
        </div>
      </nav>
      {/* MOBILE MENU */}
      <nav className="lg:hidden flex items-center justify-between ">
        <div className="logo">
          <Image src={logo} alt="Logo" width={100} />
        </div>
        <div>
          
            {/* Burger Icon */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(true)}
              className="lg:hidden"
            >
              <FaBars size={24} />
            </IconButton>

            {/* Drawer */}
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
              <div className="w-64 h-full flex flex-col p-4">
                {/* Close Icon */}
                <div className="self-end mb-4">
                  <IconButton onClick={() => setOpen(false)}>
                    <FaTimes size={24} />
                  </IconButton>
                </div>

                {/* Links */}
                <ul className="flex flex-col gap-4 text-lg">{links}</ul>
              </div>
            </Drawer>
          
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
