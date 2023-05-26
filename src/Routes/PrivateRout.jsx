import React from 'react';
import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import loader1 from "../assets/images/loader.png"

const PrivateRout = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const navigate = useNavigate();


    if(loader){
        return <img className='animate-spin mx-auto h-16 w-16 py-16' src={loader1} alt="" />
    }

    if(user){
        return children
    }
    
    return (
        <Navigate to="../user/login"></Navigate>
    );
};

export default PrivateRout;