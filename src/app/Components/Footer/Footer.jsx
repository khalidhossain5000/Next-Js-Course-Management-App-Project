// src/components/Footer.jsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import app from '../../../assets/logo/appstore-1.svg'
import google from '../../../assets/logo/googleplay.svg'
import logo from '../../../assets/logo/logo-white-1.svg'
const usefulLinks = [
  { title: "Home", href: "/" },
  { title: "All-Courses", href: "/all-courses" },
  { title: "About Us", href: "/about-us" },
  { title: "Contact Us", href: "/contact-us" },
];

const coursesLinks = [
  { title: "All Courses", href: "/all-courses" },
  { title: "Top Rated", href: "#" },
  { title: "Categories", href: "#" },
  { title: "Pricing", href: "#" },
  { title: "Become Instructor", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#392c7d] text-white">
      {/* Top area */}
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About / Logo */}
          <div className="space-y-4 xl:col-span-2">
            {/* Replace /footer-logo.png with your logo in /public */}
            <div className="w-40">
              <Link href={'/'}>
              <Image src={logo} 
              alt="Footer Logo" 
              width={200} 
              height={60} 
              className="object-contain" />
              </Link>
            </div>
            <p className="text-gray-300 text-lg">
              Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.
              
            </p>

            {/* social */}
            <div className="flex items-center gap-3 mt-3">
              <Image src={app} 
              alt="App store Logo" 
              width={200} 
              height={60} 
              className="object-contain" />
              <Image src={google} 
              alt="Google Logo" 
              width={200} 
              height={60} 
              className="object-contain" />
            </div>
          </div>

          {/* Useful Links */}
          <div className="px-6 text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((l) => (
                <li key={l.title}>
                  <Link href={l.href} className="text-gray-100 hover:text-[var(--color-custom-accent-secondary)]">
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses / Support */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Courses & Support</h3>
            <ul className="space-y-3">
              {coursesLinks.map((l) => (
                <li key={l.title}>
                  <Link href={l.href} className="text-gray-300 hover:text-[var(--color-custom-accent-secondary)]">
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>Phone: <span className="text-white font-medium">310-437-2766</span></li>
              <li>Email: <a href="mailto:info@example.com" className="text-[var(--color-custom-accent-secondary)]">info@example.com</a></li>
              <li>Address: 706 Campfire Ave. Meriden, CT</li>
            </ul>


            
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-600">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-gray-100 text-sm md:text-xl tect-center">
            © {new Date().getFullYear()} Dreams LMS. All rights reserved.
          </p>

        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
