"use client";

import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import logo from "../../../assets/logo/logo.svg";
import {
  FiHome,
  FiUsers,
  FiPackage,
  FiShoppingCart,
  FiSettings,
  FiLogOut,
  FiX,
  FiHeart,
  FiGrid,
  FiStar,
} from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import Link from "next/link";
import { useSession,signOut } from "next-auth/react";

const SideBar = ({ onClose }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const menuItems = [
    {
      text: "Dashboard",
      icon: <FiHome className="w-5 h-5" />,
      path: "/Dashboard",
    },
    {
      text: "All Courses",
      icon: <FiUsers className="w-5 h-5" />,
      path: "/Dashboard/AllCourses",
    },
    {
      text: "Add Course",
      icon: <IoMdAddCircleOutline className="w-5 h-5" />,
      path: "/Dashboard/AddCourse",
    },

    {
      text: "My Payment History",
      icon: <FiSettings className="w-5 h-5" />,
      path: "/Dashboard/MyPaymentHistory",
    },
  ];

  const handleNavigation = (path) => {
    router.push(path);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 ">
        <div className="flex items-center space-x-3">
          <div className="flex gap-3 items-center">
            <div className="logo">
              <Link href={'/'}> <Image src={logo} alt="Logo" width={200} /></Link>
            </div>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <FiX className="w-5 h-5 text-gray-500" />
          </button>
        )}
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.text}
              href={`${item?.path}`}
              className={`
                w-full flex cursor-pointer items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }
              `}
            >
              <span
                className={`
                ${isActive ? "text-white" : "text-gray-500"}
              `}
              >
                {item.icon}
              </span>
              <span className="font-medium">{item.text}</span>
            </Link>
          );
        })}
      </nav>

      {/* USER Section */}
      <div className="p-3 border-t border-gray-200">
        <div className="md:hidden">
          <div className="flex items-center space-x-4">
             <Link href={'/'}>
            <Image
              src={
                session?.user
                  ? session.user.image
                  : "https://i.ibb.co.com/zVB99J4d/DEFAULT.jpg"
              }
              alt={session?.user.name || 'user name'}
              width={40}
              height={40}
              className="rounded-full"
            />
            </Link>
            <p>{session?.user?.name}</p>
          </div>
        </div>

        {/* log out btn */}
        <div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 cursor-pointer"
          >
            <FiLogOut className="w-5 h-5 text-gray-500" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
