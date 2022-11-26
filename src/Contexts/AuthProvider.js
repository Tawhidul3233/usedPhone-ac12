import React, { Children, createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { app } from '../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {

     
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true)

     
     const openAccountWithEmail =(email, password)=>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password);
     };

     const changeName = (userInfo)=>{
          return updateProfile(auth.currentUser, userInfo);
     }

     const lgoinUserWithEmail = (email, password)=>{
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password);
     };

     const createUserWithGoogle = (provider)=>{
          setLoading(true)
          return signInWithPopup(auth, provider)
     }

     const createUserWithGithub = (provider)=>{
          setLoading(true)
          return signInWithPopup(auth, provider)
     }

     const logOutUser = ()=>{
          setLoading(true)
          return signOut(auth);
     }





     useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth, (currentUser=>{
               setUser(currentUser)
               setLoading(false)
          }))
          return()=>{
               unsubscribe()
          }
     },[])



     const authInfo = { loading, user, openAccountWithEmail, createUserWithGoogle, createUserWithGithub, logOutUser, lgoinUserWithEmail , changeName  }


     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;