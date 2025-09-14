/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useParams } from 'next/navigation';
import React from 'react';

const page = () => {
      const { id } = useParams(); // এই id দিয়ে API call করব
console.log('this is id',id);
    return (
        <div>
            <h3>WELCOME TO UPDATE PAGE</h3>
        </div>
    );
};

export default page;