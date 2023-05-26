import React from 'react';

const Footer = () => {
    return (
        // footer section 
        <footer className='bg-[#212226] flex md:flex-row flex-col justify-center gap-12 items-center md:gap-44 md:px-20 px-8 py-12 text-white '>

            <div>
                <h3 className='text-2xl font-semibold mb-4'>Opening Times</h3>
                <div className=''>
                    <p className='mb-2'>Monday – Thursday: 08AM – 10PM </p>
                    <p className='mb-2'>Friday – Saturday: 10AM–11:30PM </p>
                    <p className='mb-2'>Sunday: <span className='text-[#C59D5F]'>Closed</span></p>
                    <p className='mb-2'>Booking TIme: 24/7 Hours</p>
                </div>
            </div>

            <div className='w-60 text-center '>
                <h2 className='text-2xl font-semibold mb-4'>Chef's China</h2>
                <p>This one  of the best you can get in China. Over 50 years it keeps the reputation. Just visit and enjoy a meal.</p>
            </div>

            <div className='ms-8 md:ms-0'>
                <h2 className='text-2xl font-semibold mb-4'>Contact Info</h2>
                <p className='mb-2'><span className='text-[#C59D5F]'> Address</span>: Strusshamn Senter, 5318 Strusshamn</p>
                <p className='mb-2'><span className='text-[#C59D5F]'> Email</span>: example@info.com</p>
                <p className='mb-2'><span className='text-[#C59D5F]'> Call</span>: (+91)-213-666-0027</p>
            </div>
            
        </footer>
    );
};

export default Footer;