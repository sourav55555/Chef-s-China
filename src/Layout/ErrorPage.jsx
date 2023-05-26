import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/images/pngegg.png"

const ErrorPage = () => {
    return (
        <div className='flex h-screen w-full items-center flex-col'>
            <img src={image} alt="" />
            <h2 className='text-xl mb-3'>Page Not Found</h2>
            <Link to="/" className='bg-[#C59D5F] px-6 text-lg text-white py-2'>Back Home</Link>
        </div>
    );
};

export default ErrorPage;