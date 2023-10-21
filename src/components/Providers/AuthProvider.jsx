import PropTypes from 'prop-types';
import { createContext} from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    

    const names = {
        name:"hallaa",
        address:"vallaa"
    }

    const authInfo ={
        names
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}
export default AuthProvider;