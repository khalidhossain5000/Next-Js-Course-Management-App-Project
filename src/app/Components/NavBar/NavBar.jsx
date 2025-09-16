"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo/logo.svg";
import { FaTimes, FaUser } from "react-icons/fa";
import { Drawer, IconButton } from "@mui/material";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about-us"}>About Us</Link>
      </li>
      {session?.user && (
        <>
          <li>
            <Link href={"/Dashboard"}> Dashboard</Link>
          </li>
        </>
      )}

      <li>
        <Link href={"/all-courses"}>All Courses</Link>
      </li>
      <li>
        <Link href={"/contact-us"}>Contact Us</Link>
      </li>
    </>
  );

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

  if (status === "loading") {
    // Loading state
    return (
      <div className="flex items-center justify-center">
        <p className="text-gray-900">User Data Loading...</p>
      </div>
    );
  }

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
         <Link href={'/'}> <Image src={logo} alt="Logo" width={200} /> </Link>
        </div>
        <div className="nav-meus">
          <ul className="flex items-center gap-6">{links}</ul>
        </div>

        <div>
          {status === "authenticated" ? (
            <div className="flex items-center space-x-4">
              <Image
                src={
                  session?.user
                    ? session.user.image
                    : "https://i.ibb.co.com/zVB99J4d/DEFAULT.jpg"
                }
                alt={session.user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <p>{session.user.name}</p>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-buttons flex items-center">
              <Link href={"/Auth/Login"}>
                <button className="bg-custom-accent-primary text-white py-[7px] px-4 flex items-center rounded-[55px] text-sm font-semibold gap-2 mr-3 cursor-pointer">
                  <FaUser />
                  Sign In
                </button>
              </Link>
              <Link href={"/Auth/Register"}>
                <button className="bg-custom-accent-secondary text-white py-[7px] px-4 flex items-center rounded-[55px] text-sm font-semibold gap-2 cursor-pointer">
                  <FaUser />
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
      {/* MOBILE MENU */}
      <nav className="lg:hidden flex items-center justify-between ">
        <div className="logo">
          <Link href={'/'}> <Image src={logo} alt="Logo" width={100} /></Link>
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
              <div className="flex flex-col justify-between  h-full">
             <div>
               <ul className="flex flex-col gap-4 text-lg">{links}</ul>
             </div>
              <div>
                {status === "authenticated" ? (
                  <div className="flex items-center space-x-4">
                    <Image
                      src={
                        session?.user
                          ? session.user.image
                          : "https://i.ibb.co.com/zVB99J4d/DEFAULT.jpg"
                      }
                      alt={session.user.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <p>{session.user.name}</p>
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="auth-buttons flex items-center">
                    <Link href={"/Auth/Login"}>
                      <button className="bg-custom-accent-primary text-white py-[7px] px-4 flex items-center rounded-[55px] text-sm font-semibold gap-2 mr-3 cursor-pointer">
                        <FaUser />
                        Sign In
                      </button>
                    </Link>
                    <Link href={"/Auth/Register"}>
                      <button className="bg-custom-accent-secondary text-white py-[7px] px-4 flex items-center rounded-[55px] text-sm font-semibold gap-2 cursor-pointer">
                        <FaUser />
                        Register
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            </div>
          </Drawer>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
