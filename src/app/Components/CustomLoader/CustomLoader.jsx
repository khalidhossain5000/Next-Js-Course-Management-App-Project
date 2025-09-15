import React from 'react';

const CustomLoader = () => {
    return (
        <div className="min-h-screen flex bg-white inset-0 justify-center items-center">
            <PropagateLoader />
        </div>
    );
};

export default CustomLoader;