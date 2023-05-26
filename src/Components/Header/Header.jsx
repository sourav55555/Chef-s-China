import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./header.css";
import logo from "../../assets/images/pngkit_chinese-food-png_486828.png"
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const Header = ({handleDark, dark}) => {

  const {user, logOut, loader} = useContext(AuthContext);
  const [name, setName] = useState(false);
  const [toggle, setToggle] = useState(false);

  if(loader){
    return;
  }
  const logout1 = () =>{
    logOut()
    .then()
    .catch(error => console.error(error))
  }

  const handleName = () =>{
    setName(!name);
  }

    return (

      // header section 
        <nav className='flex justify-between items-center py-8 relative md:static dark:text-white bg-slate-100 dark:bg-slate-800 container md:px-20 px-4 mx-auto'>

            <Link to="/">
            <div className='flex gap-3'>
                <img className='h-12 w-16' src={logo} alt="" />
                <h2 className='text-xl italic inset-0 font-bold'>Chef's <br/> China</h2>
            </div>
            </Link>

            <div className={`flex z-10 md:flex-row flex-col absolute md:static md:w-fit w-full left-0 bg-slate-100 dark:bg-slate-800 md:bg-transparent items-center md:gap-8 gap-4 py-4 md:py-0 transition-all duration-500 md:text-xl ${toggle ? " top-[7rem]" : " top-[-6.5rem]"}`}>
                <NavLink
                  onClick={()=> setToggle(!toggle)}
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active": ""
                    }
                  >
                    Home
                </NavLink>
                <NavLink
                  onClick={()=> setToggle(!toggle)}
                    to="/blogs"
                    className={({ isActive }) =>
                      isActive ? "active": ""
                    }
                  >
                    Blogs
                </NavLink>
            </div>

            <div className='relative flex md:gap-6 gap-3'>
            <button onClick={handleDark}>{dark ? <SunIcon className='h-6 w-6'/> :  <MoonIcon className='w-6 h-6' /> }
            </button>
            
                {
                  user ? 
                  <div className='flex items-center gap-3'>
                    <img onMouseLeave={handleName} onMouseOver={handleName} className='w-10 z-10 h-10 rounded-full cursor-pointer' src={user?.photoURL} alt="" /> 
                    <button className='border-red-400 rounded-md hidden md:inline-block px-3 py-2 border-2' onClick={logout1}>Logout</button>
                  </div> : 
                  <Link to="/user/login"><button className='bg-[#C59D5F] px-8 py-4 text-white font-semibold'>Login</button></Link>
                }
            <p className={`mt-2 w-40 text-center absolute left-[-4rem] bottom-[-2.5rem] border-2 border-gray-400 rounded-md px-2 py-1 ${name? "" : "hidden"}`}>
              {user?.displayName}
            </p>
            <button onClick={()=> setToggle(!toggle)} className='md:hidden'>{toggle ? <XMarkIcon className='h-8 w-8 '/> : <Bars3Icon className='h-8 w-8 '/>} </button>
            
                
            </div>
        </nav>
    );
};

export default Header;