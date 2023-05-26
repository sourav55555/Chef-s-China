import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { getAuth, updateProfile } from "firebase/auth";

const Register = () => {

    const {user, createUser, profileUpdate} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("")
    const navigete = useNavigate();

    const handleSubmit = (event)=>{
        event.preventDefault();


        const form = event.target;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        const photo = form.photo.value;
        console.log(form)



        if(email.length == 0 ){
            setErrorMessage("Email cannot be empty");
            return
        }

        if(password.length == 0){
            setErrorMessage("Password cannot be empty")
            return
        }
        else if(password.length < 6){
            setErrorMessage("Password must be equal or greater then 6 character")
            return  
        }
       

        createUser(email, password)
        .then(result => {
            const newUser = result.user
            updateProfile(newUser,{
                displayName: name, photoURL: photo
            })
            .then(result => navigete("/"))
            .catch(error => console.error(error))
            alert("update successful")
        })
        .catch(error => console.error(error.message))

        
    }

    return (

        // register section 

        <div className='w-full min-h-screen flex justify-center pb-32 dark:text-white dark:bg-cyan-950'>

            <div className='md:p-10 p-6 w-5/6 md:w-2/6 mt-24 border-4 rounded-xl text-center border-[#C59D5F]'>
                <h2 className='text-3xl font-semibold mb-8 md:mb-12'>Create An Account</h2>

                <form onSubmit={handleSubmit} className='text-start mb-3' action="">
                    <div className='flex flex-col mb-6'>
                        <label className='text-lg font-semibold mb-3' htmlFor="name">Name</label>
                        <input className='px-4 py-3 border-b-2 border-[#C59D5F] rounded-md bg-slate-50' type="text" name="name" placeholder='Enter name' id=""/>
                    </div>

                    <div className='flex flex-col mb-6'>
                        <label className='text-lg font-semibold mb-3' htmlFor="email">Email</label>
                        <input className='px-4 py-3 border-b-2 border-[#C59D5F] rounded-md bg-slate-50' type="email" name="email" placeholder='Enter email' id=""/>
                    </div>

                    <div className='flex flex-col mb-6'>
                        <label className='text-lg font-semibold mb-3' htmlFor="email">Photo</label>
                        <input className='px-4 py-3 border-b-2 border-[#C59D5F] rounded-md bg-slate-50' type="text" name="photo" placeholder='Enter photo url' id=""/>
                    </div>

                    <div className='flex flex-col mb-6'>
                        <label className='text-lg font-semibold mb-3' htmlFor="password">Password</label>
                        <input className='px-4 py-3 border-b-2 border-[#C59D5F] rounded-md bg-slate-50' type="password" name="password" id="" placeholder='Enter Password'/>
                    </div>

                    <div className='h-8'>
                        <p className='text-red-600 my-3'>{errorMessage}</p>
                    </div>

                    <div className='text-center mb-4'>
                        <button className='mx-auto bg-[#C59D5F] text-lg text-white w-1/2 py-3 rounded' type='submit'>Register</button>
                    </div>

                    <div className='text-center mb-5'>
                        <p className='mx-auto'>Already have an account? 
                            <Link className='text-[#967543] font-semibold block md:inline-block ms-2' to="/user/login">Please Login</Link> 
                        </p>
                    </div>
                    
                </form>
                
            </div>
        </div>
    );
};

export default Register;