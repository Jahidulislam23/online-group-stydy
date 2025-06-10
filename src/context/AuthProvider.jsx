import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {createUserWithEmailAndPassword,  GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import {auth} from '../firebase/firebase.init'
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()

    const [user,setUser]= useState(null)
    const [loading, setLoading] = useState(true)

    // const {user} = useContext(AuthContext)

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const handleLogOut = () =>{
        setLoading(true)
        return signOut(auth)
        // setLoading(false)
    }

    useEffect(()=>{

            const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser)
                setLoading(false)
            })
            return ()=>{
                unsubscribe()
            }
    },[])
    console.log(user)
    const userInfo = {
        createUser,
        loginUser,
        handleLogOut,
        googleSignIn,
        setUser,
        user,
        loading,
        
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;