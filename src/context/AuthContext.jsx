import { createContext,useContext } from "react"
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
 } from "firebase/auth";
 import { useState,useEffect } from 'react'
 import { auth } from "../firebase";


const  authContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)


    const singUp = ( email,password,name,apellido ) => createUserWithEmailAndPassword( auth,email,password,name,apellido,)
    const loginUp = async( email,password ) => signInWithEmailAndPassword( auth,email,password )


    /* Cerrar Sesion */
    const [loading, setLoading] = useState(true)
    const logout = () => signOut(auth)

    useEffect(() => {
        const StateChanged = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)

            return ()=> StateChanged();
        
        })
    }, [])
    
    return <authContext.Provider value={{ singUp, loginUp, user,logout,loading }}>{ children }</authContext.Provider>;
}

export const useAuth = () => {
    const context = useContext(authContext)
        if (!context)throw new Error('Error No hay un Proveedor') 
    return context
}


