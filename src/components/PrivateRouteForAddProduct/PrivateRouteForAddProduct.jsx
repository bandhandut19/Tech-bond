import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const PrivateRouteForAddProduct = ({children}) => {
    const {user}= useContext(AuthContext)
    const navigate = useNavigate()
    if(user){
        return children
    }
    return (
        navigate('/')
    );
};

export default PrivateRouteForAddProduct;