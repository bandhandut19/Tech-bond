import PropTypes from 'prop-types';
import { createContext, useEffect, useState} from "react";
import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import app from '../../../firebase.config';


export const auth = getAuth(app)
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


    
   const [user,setUser] = useState(null)
    const [loading,setLoading] =useState(true)
   
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> {

            unsubscribe()
        } 
    },[])

    const [cred,setCred] = useState([])

    const credentials = (credentials)=>{
        setCred(credentials)
    }
    







   
    
    const authInfo ={
        user,
        createUser,
        loginUser,
        loading
    }
    return (
        <AuthContext.Provider value={{authInfo,cred,credentials}}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}
export default AuthProvider;