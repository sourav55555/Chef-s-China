import React from 'react';
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { useLoaderData } from 'react-router-dom';
import ChefCard from './Chefs/ChefCard';
import image from "../../assets/images/image1.jpg";
import dish1 from "../../assets/images/dishes/Dim Sum.webp"
import dish2 from "../../assets/images/dishes/Kung Pao Chicken.webp"
import dish3 from "../../assets/images/dishes/Peking Roasted Duck.webp"
import dish4 from "../../assets/images/dishes/Sweet and Sour Pork.webp"
import loader from '../../assets/images/loader.png';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Home = () => {
    const {loader} = useContext(AuthContext);
    const chefs = useLoaderData();
    console.log(chefs);
    return (
        <div className='dark:text-white dark:bg-cyan-950'>

            {/* baneer code */}
            <div className={`banner h-[36rem] md:h-screen bg-no-repeat bg-cover w-full bg-[url('/src/assets/images/Famous-Chinese-Chefs.webp')] mb-32`}>
                <div className='h-full text-white w-full bg-[rgba(0,0,0,.65)] flex items-center justify-center flex-col'>
                    <h2 className='font-semibold text-5xl md:text-6xl mb-6'>Welcome To <br/> Chef's China</h2>
                    <p className='md:w-2/5 w-5/6 text-lg mb-8 text-center'>This is the best restaurant for your to get a perfect delicious meal in China. There are top Chefs for your required recipes. Even you can request your favorite chef to cooke your meal. We are always ready for your order.</p>
                    <button className='bg-[#C59D5F] hover:bg-[#a36b17] px-16 text-lg font-semibold flex items-center gap-2 py-4'>Explore <ArrowRightIcon className='w-6 h-6 text-white'/></button>
                </div>

            </div>

            <div className='md:px-20 px-6 text-center mb-32'>
                <h2 className='mx-auto text-3xl font-bold mb-12 text-[#C59D5F]'>Our Story</h2>
                <div className='flex items-center justify-evenly md:flex-row flex-col-reverse gap-12'>
                    <div className='md:w-2/5 text-start'>
                        <p className='mb-4 text-4xl font-semibold'>Traditional & Modern <br/> Service Since <span className='text-[#C59D5F]'>1970</span></p>
                        <p className='text-lg dark:text-gray-400 text-gray-600'>
                            It all started with an idea of two childhood friends, baseball teammates and food lovers, to   bring together each of their own strenghts, to create something they can share with others.  With Chef Krsna – a natural artist, with an immense passion in culinary art, and Kai – a CPA accountant with business acumen, Chefs China Restaurant was born.
                        </p>
                        <button className='bg-[#C59D5F] hover:bg-[#a36b17] flex items-center gap-3 mt-8 text-lg text-white px-10 py-4'>Our Story <ArrowUpRightIcon className='w-4 h-4 text-white'/></button>
                    </div>
                <div className='md:w-1/2'>
                    <img className='rounded-lg' src={image} alt="" />
                </div>
                </div>
                
            </div>

            {/* chefs card */}
            <div className='text-center px-6 md:px-20 mb-32'>
                <h2 className='mx-auto text-3xl text-[#C59D5F] font-bold mb-12'>Our Best Chefs</h2>
                <div className={`items-center justify-center w-full h-48 ${loader ? "flex " : "hidden"}`}>
                    <img className='animate-spin h-16 w-16' src={loader} alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {
                    chefs.chefs.map(data => <ChefCard key={data.id} chef = {data}/>)
                }
                </div>
            </div>

            {/* discount section  */}
            <div className='md:px-20 px-8 text-center dark:bg-cyan-950 pb-32'>
                <h2 className='mx-auto text-3xl text-[#C59D5F] font-bold mb-3'>Today's Special</h2>
                <p className='text-2xl mb-10'>Buy & get <span className='text-[#C59D5F] font-bold'>discount</span></p>
                <div className='flex md:flex-row flex-col gap-10'>
                    <div className='px-4 py-6 border-b-2'>
                        <img className='rounded-lg' src={dish1} alt="" />
                        <h3 className='text-2xl font-semibold my-6'>Dim Sum</h3>
                        <div className='flex justify-between items-center '>
                            <p className='text-[#C59D5F] text-xl font-semibold'>Get 20% off</p>
                            <button className='bg-[#C59D5F] hover:bg-[#a36b17] px-6 py-2 rounded-md text-white text-lg'>Buy</button>
                        </div>
                    </div>
                    <div className='px-4 py-6 border-b-2'>
                        <img className='rounded-lg' src={dish2} alt="" />
                        <h3 className='text-2xl font-semibold my-6'>Kung Pao Chicken</h3>
                        <div className='flex justify-between items-center '>
                            <p className='text-[#C59D5F] text-xl font-semibold'>Get 15% off</p>
                            <button className='bg-[#C59D5F] hover:bg-[#a36b17] px-6 py-2 rounded-md text-white text-lg'>Buy</button>
                        </div>
                    </div>
                    <div className='px-4 py-6 border-b-2'>
                        <img className='rounded-lg' src={dish3} alt="" />
                        <h3 className='text-2xl font-semibold my-6'>Peking Roasted Duck</h3>
                        <div className='flex justify-between items-center '>
                            <p className='text-[#C59D5F] text-xl font-semibold'>Get 23% off</p>
                            <button className='bg-[#C59D5F] hover:bg-[#a36b17] px-6 py-2 rounded-md text-white text-lg'>Buy</button>
                        </div>
                    </div>
                    <div className='px-4 py-6 border-b-2'>
                        <img className='rounded-lg' src={dish4} alt="" />
                        <h3 className='text-2xl font-semibold my-6'>Sweet and Sour Pork</h3>
                        <div className='flex justify-between items-center '>
                            <p className='text-[#C59D5F] text-xl font-semibold'>Get 25% off</p>
                            <button className='bg-[#C59D5F] hover:bg-[#a36b17] px-6 py-2 rounded-md text-white text-lg'>Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;