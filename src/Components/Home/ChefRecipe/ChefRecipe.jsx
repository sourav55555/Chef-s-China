import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import RecipeCard from './RecipeCard';
import loader1 from "../../../assets/images/loader.png"
import LazyLoad from 'react-lazy-load';

const ChefRecipe = () => {

    const chefData = useLoaderData();
    const {id, name, picture, years_of_experience, recipes_number, likes} = chefData;
    const [recipes, setRecipes] = useState([]);
    const [loader, setLoader] = useState(true);

    // load recipes data 
    useEffect(()=>{
        fetch("https://chefs-server.vercel.app/recipes")
        .then(res => res.json())
        .then(data => {
            setRecipes(data.recipes);
            setLoader(false)
        })
    } , [])
    return (
        <div className='dark:text-white dark:bg-cyan-950'>
        
            <div className="banner mb-20 h-screen w-full">
                <div className='md:h-1/2 h-full flex px-20 items-center justify-center relative bg-[#C59D5F]'>

                    <div className='rounded-md w-full md:w-1/2 text-center absolute top-20 md:top-1/2 left-0 md:left-20 h-[30rem]'>
                        <LazyLoad height={480} threshold={0.95}>
                            <img className=' h-[30rem] mx-auto border-8 border-[#C59D5F]' src={picture} alt="" />
                        </LazyLoad>
                        
                    </div>

                <div className='absolute top-3/4 md:right-28 w-3/4 md:w-1/3 bg-slate-50 min-h-max p-8 rounded-lg border-8 border-[#C59D5F]'>
                    <h3 className='text-3xl my-6 font-bold text-[#C59D5F]'>{name}</h3>
                    <div>
                        <p className='text-lg text-gray-600 my-4'>Most famous chef in China. There are followers all over the world. The dishes are very popular. Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                        <div>
                            <p className='mb-2 text-lg text-gray-600'>Total Recipes: {recipes_number}</p>
                            <p className='mb-2 text-lg text-gray-600'>Years Of Experience : {years_of_experience}</p>
                            <p className='mb-3 text-lg text-gray-600 flex gap-1 items-center'><HandThumbUpIcon className='w-6 h-6 text-green-600'/> {likes}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='text-center pb-32 md:mt-0 mt-96'>
                <h1 className='text-3xl mb-10 font-bold'>{name} <br/> <span className='text-[#C59D5F]'>Top Recipes</span></h1>

                <div className={`text-center w-full h-48 ${loader ? "" : "hidden"}`}>
                        <img className='animate-spin mx-auto h-16 w-16' src={loader1} alt="" />
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-3 text-start gap-6 px-8 md:px-20'>
                    
                {
                    recipes.map(data=> <RecipeCard key={data.id} recipe={data}/>)
                }
                </div>
            </div>
        </div>
    );
};

export default ChefRecipe;