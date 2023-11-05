import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { children } from "react";

export const AuthContext = createContext()
const auth =getAuth(app)


const AuthProVider = ({children}) => {

const [user,setUser] =useState()
const [loading,setLoading] =useState(true)

const createUser =(email,password)=>{
setLoading(true)
 return createUserWithEmailAndPassword(auth,email,password)
}

const signIn =(email,password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(auth,email,password)
}

const provider = new GoogleAuthProvider()
const googleLogIn = ()=>{
  setLoading(true);
  return signInWithPopup(auth,provider)
}

const logOut =()=>{
 return signOut(auth)
}


useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,currentUser=>{
         setUser(currentUser) 
         setLoading(false)                    
 })
 return ()=>{
 return unsubscribe()
 }
},[])
 const authInfo ={user,loading, createUser,signIn,logOut ,googleLogIn}

return (
 <AuthContext.Provider value={authInfo}>
        {children}                                                                                  
 </AuthContext.Provider>
);
};

export default AuthProVider;