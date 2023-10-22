import { useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext, auth } from "../Providers/AuthProvider";
import { signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/images/logo.jpg'
const Navbar = () => {
    const { authInfo } = useContext(AuthContext)
    const { user} = authInfo
    const handleLogout = () => {
        signOut(auth)
    }
    
    const handleAddProduct = () => {

        if (!user) {


            toast("Login / Register To View", {
                position: "top-center",
                autoClose: 1000, // Close after 1 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
            });
        }
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        {
                        user ?
                            <li><NavLink to='/addproducts'>Add Product</NavLink></li>
                            :
                            <li><button onClick={handleAddProduct}>Add Product</button></li>
                    }
                    {
                        user ?
                            <li><NavLink to='/mycart'>My Cart</NavLink></li>
                            :
                            <li><button onClick={handleAddProduct}>My Cart</button></li>
                    }
                    </ul>
                </div>
                <div className="flex text-center items-center justify-center">
                    <img className="w-[5rem]" src={logo} alt="" />
                <Link to='/' className="normal-case md:text-4xl text-xl font-extrabold text-amber-600">Tech Bond</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10">
                    <li><NavLink to='/'>Home</NavLink></li>
                    {
                        user ?
                            <li><NavLink to='/addproducts'>Add Product</NavLink></li>
                            :
                            <li><button onClick={handleAddProduct}>Add Product</button></li>
                    }
                    {
                        user ?
                            <li><NavLink to='/mycart'>My Cart</NavLink></li>
                            :
                            <li><button onClick={handleAddProduct}>My Cart</button></li>
                    }

                </ul>
            </div>
            <div className="navbar-end flex md:flex-row flex-col-reverse">

                <div>
                    {
                        user ? <h1 className="mr-2 mt-2 md:mt-0 bg-amber-500 px-2 rounded-lg">{user.email}</h1>: ''
                    }
                </div>
                <div>

                </div>

                {
                    user ? <Link to='/' onClick={handleLogout} className="btn">Logout</Link> : <Link to='/login' className="btn">Login</Link>
                }


            </div>
        </div>
    );
};

export default Navbar;