"use client"
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

import toast from "react-hot-toast";

const SocialLogin = () => {
  
//   const location = useLocation();
    // const navigate = useNavigate();
    const from = location.state?.from || '/';

 const handleGoogleSignIn = async () => {
  const result = await signIn("google");

  if (result?.error) {
    toast.error("Google login failed!");
  } else {
    toast.success("Google login successful!");
    window.location.href = "/"; // Login successful হলে home page redirect
  }
};

   
  return (
    <div>
      <div className="flex items-center pt-1 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 text-sm dark:text-gray-400">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <div
        onClick={handleGoogleSignIn}
        className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
      >
        <FcGoogle size={32} />

        <p>Continue with Google</p>
      </div>
    </div>
  );
};

export default SocialLogin;