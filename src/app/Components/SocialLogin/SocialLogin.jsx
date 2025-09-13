"use client"
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { ImSpinner9 } from "react-icons/im";
import toast from "react-hot-toast";


const SocialLogin = () => {
    const [loading, setLoading] = useState(false);
//   const location = useLocation();
    
    // const from = location.state?.from || '/';

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signIn("google", { redirect: false,callbackUrl: "/" });
      console.log(result);
       
    } catch (error) {
      console.error(error);
      setLoading(false);
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

       
        {loading ? (
                <ImSpinner9 className="animate-spin m-auto" />
              ) : (
                "Continue with Google"
              )}
      </div>
    </div>
  );
};

export default SocialLogin;