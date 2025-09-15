import React from "react";
import { HashLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="min-h-screen flex bg-white inset-0 justify-center items-center">
      <HashLoader color="#ff4667" size={100} />
    </div>
  );
};

export default loading;
