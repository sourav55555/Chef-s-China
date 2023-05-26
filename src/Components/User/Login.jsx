import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import google from "../../assets/images/icons8-google-48.png"
import github from "../../assets/images/icons8-github-50.png"
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const Login = () => {

    const {user, googleLogin, githubLogin, signIn} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("")
    const navigete = useNavigate();

    const handleLogin = (event)=>{

        event.preventDefault();

        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;


        signIn(email, password)
        .then(result => navigete("/"))
        .catch(error => setErrorMessage(error.message))
    }

    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result => navigete("/"))
        .catch(error => console.error(error))
    }

    const handleGithubLogin = ()=>{
        githubLogin()
        .then(result => navigete("/"))
        .catch(error => console.error(error.message))
    }

    return (

        // login section 

        <div className='w-full min-h-screen flex justify-center pb-32 dark:text-white dark:bg-cyan-950'>

            <div className='md:p-10 p-4 w-5/6 md:w-2/6 mt-24 border-4 rounded-xl text-center border-[#C59D5F]'>
                <h2 className='text-3xl font-semibold mb-10 md:mb-12'>Login</h2>

                <form onSubmit={handleLogin} className='text-start mb-12' action="">
                    <div className='flex flex-col mb-6'>
                        <label className='text-lg font-semibold mb-3' htmlFor="email">Email</label>
                        <input className='px-4 py-3 border-b-2 border-[#C59D5F] rounded-md bg-slate-50' type="email" name="email" placeholder='Enter email' id="" required/>
                    </div>

                    <div className='flex flex-col mb-6'>
                        <label className='text-lg font-semibold mb-3' htmlFor="password">Password</label>
                        <input className='px-4 py-3 border-b-2 border-[#C59D5F] rounded-md bg-slate-50' type="password" name="password" id="" placeholder='Enter Password' required/>
                        <button className='ms-auto mt-2 text-[#ac3838] underline'>Forgot Password</button>
                    </div>

                    <div className='h-8'>
                        <p className='text-red-600 my-3'>{errorMessage}</p>
                    </div>

                    <div className='text-center mb-4'>
                        <button className='mx-auto bg-[#C59D5F] text-lg text-white w-1/2 py-3 rounded' type='submit'>Login</button>
                    </div>

                    <div className='text-center mb-5'>
                        <p className='mx-auto'>Don't have an account? 
                            <Link className='text-[#967543] block md:inline-block font-semibold ms-2' to="/user/register">Please Register</Link> 
                        </p>
                    </div>

                </form>

                <div className='text-lg font-semibold border-b-2 pb-2 mb-6'>
                    Other options
                </div>

                <div className='text-center'>
                    <button onClick={handleGoogleLogin} className='flex mx-auto items-center justify-center gap-2 md:w-1/2 w-4/5 border-2 mb-3 border-[#967543] py-3'><img className='w-6 h-6' src={google} alt="" /> Login With Google</button>
                    <button onClick={handleGithubLogin} className='md:w-1/2 w-4/5 mx-auto border-2 border-[#967543] flex gap-2 justify-center items-center py-3' ><img className='w-6 h-6' src={github} alt="" /> Login With Github</button>
                </div>
                
            </div>
        </div>
    );
};

export default Login;