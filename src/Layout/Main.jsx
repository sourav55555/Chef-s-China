import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Main = () => {

    const [dark, setDark] = useState(false);

    useEffect(()=>{
        if(dark){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark")
        }
    }, [dark])

    const handleDark = ()=>{
        setDark(!dark);
    }


    return (
        <div>
           <Header handleDark ={handleDark} dark={dark}/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default Main;