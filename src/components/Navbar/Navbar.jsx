import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext, auth } from "../Providers/AuthProvider";
import { signOut } from "firebase/auth";

const Navbar = () => {
    const {user}=useContext(AuthContext)
    const handleLogout=()=>{
        signOut(auth)
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
                        <li><NavLink to='/addproducts'>Add Products</NavLink></li>
                        <li><NavLink to='/mycart'>My Cart</NavLink></li>
                    </ul>
                </div>
                <Link to='/' className="normal-case md:text-4xl text-xl font-extrabold text-amber-600">Tech Bond</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10">
                    <li><NavLink to='/'>Home</NavLink></li>
                    {
                        user ? 
                        <li><NavLink to='/addproducts'>Add Product</NavLink></li>
                        :
                        <li><Link to='/'>Add Product</Link></li> 
                    }
                    <li><NavLink to='/mycart'>My Cart</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user? <Link to='/' onClick={handleLogout} className="btn">Logout</Link> : <Link to='/login' className="btn">Login</Link>
                }

                
            </div>
        </div>
    );
};

export default Navbar;