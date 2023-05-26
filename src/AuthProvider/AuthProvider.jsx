import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebaseConfig/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { useEffect } from 'react';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    
    const googleAuth = new GoogleAuthProvider();
    const githubAuth = new GithubAuthProvider();


    const createUser =(email, password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = ()=>{
        setLoader(true);
        return signInWithPopup(auth, googleAuth);
    }

    const githubLogin = ()=>{
        setLoader(true);
        return signInWithPopup(auth, githubAuth);
    }

    const profileUpdate = (name, photo)=>{
        setLoader(true);
        return updateProfile(auth.currentUser, {displayName: {name}, photoURL: {photo}})
    }

    const logOut = ()=>{
        setLoader(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
            setUser(loggedUser);
            setLoader(false)
            console.log(loggedUser);
            return ()=> unsubscribe();
        })
    }, [])

    const authComponent = {
        user,
        googleLogin,
        githubLogin,
        createUser,
        profileUpdate,
        logOut,
        signIn,
        loader
    }

    return (
        <AuthContext.Provider value={authComponent}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;