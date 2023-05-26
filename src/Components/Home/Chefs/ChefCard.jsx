import React from 'react';
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({chef}) => {

    const {id, name, picture, years_of_experience, recipes_number, likes} = chef;

    return (
        // chef card section 
        <div className='flex md:flex-row flex-col items-center gap-8 p-6 border-b-2 dark:bg-cyan-900 bg-slate-50 rounded-lg'>
            <LazyLoad height={192} width={160} threshold={0.95}>
                <img className='h-48 rounded-lg w-40' src={picture} alt="" />
            </LazyLoad>
           
           <div className='flex justify-center md:justify-around h-full items-start flex-col'>
                <h3 className='font-semibold mx-auto md:mx-0 mb-3 text-xl'>{name}</h3>

                <div className='flex items-center dark:text-gray-400 text-gray-600 gap-2 md:flex-row flex-col mx-auto mb-4 md:gap-6'>
                    <p>{years_of_experience} Years Of Experience</p>
                    <p>{recipes_number} Recipes Total</p>
                </div>

                <div className='flex gap-12 items-center'>
                    <p className='flex gap-2'><HandThumbUpIcon className='w-6 h-6 text-green-600'/> {likes}</p>
                    <Link to={`/recipe/${id}`}><button className='bg-[#C59D5F] py-2 px-4 text-white'>View Recipes</button></Link>
                </div>
                
           </div>
        </div>
    );
};

export default ChefCard;