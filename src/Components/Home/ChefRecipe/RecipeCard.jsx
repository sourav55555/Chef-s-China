import React from 'react';
import { StarIcon, HeartIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({recipe}) => {
    const {id, name, ingredients, cooking_method, rating} = recipe;
    const [favorite, setFavorite] = useState(false);

    const favbtn = (event)=>{
        setFavorite(true);
        toast("The recipe is your favorite");
    }


    return (
        <div >
            <div className='p-8 rounded-lg border-2'>
                <h3 className='text-2xl text-[#C59D5F] font-semibold border-b-2 dark:bg-cyan-800 bg-slate-50 rounded-md mb-4 py-4'>{name}</h3>

                <ul className='text-gray-600 dark:text-gray-400 mb-6 md:h-60'>
                    <p className='text-lg font-semibold mb-3'>Ingredients</p>
                    {
                        ingredients.map(data => <li className='flex gap-2 items-center'><ArrowRightCircleIcon className='w-3 h-3'/> {data}</li>)
                    }
                </ul>

                <div className='mb-6 mt-3 md:h-80'>
                    <p className='text-lg font-semibold mb-2'>Cooking Method</p>
                    <p className='text-gray-600 dark:text-gray-400'>{cooking_method}</p>
                </div>
                
                <div className='flex items-center justify-between'>
                    <p className='flex items-center gap-1'><StarIcon className='w-6 h-6 text-yellow-500'/> {rating}</p>
                    <button disabled={favorite ? true : false} onClick={favbtn} className={`border-4 border-[#b89051] px-2 py-2 rounded-full text-white gap-1 disabled:opacity-60`} ><HeartIcon className='w-6 h-6 text-pink-700'/></button>
                    
                </div>
                <ToastContainer />
            </div>
            
        </div>
    );
};

export default RecipeCard;