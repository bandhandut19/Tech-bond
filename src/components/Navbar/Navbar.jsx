import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext, auth } from "../Providers/AuthProvider";
import { signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/images/logo.jpg'
const Navbar = () => {
    const { authInfo } = useContext(AuthContext)
    const { user } = authInfo
    const handleLogout = () => {
        signOut(auth)
    }

    const [userInfo, setUserInfo] = useState([])
    useEffect(() => {
        fetch('https://tech-bond-server.vercel.app/userinfo')
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [])


    const currentUserInfo = user ? userInfo?.find(item => user?.email.toLowerCase() === item.email.toLowerCase()) : null;
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


    const [darkMode, setDarkMode] = useState("light")

    const modeHandler = () => {
        const html = document.documentElement;

        if (darkMode === "light") {
            html.setAttribute("data-theme", "dark")
            setDarkMode("dark");
            localStorage.setItem("mode", 'dark')
        } else {
            html.setAttribute("data-theme", "light")
            setDarkMode("light");
            localStorage.setItem("mode", 'light')
        }
    };

    useEffect(() => {
        const presentMode = localStorage.getItem("mode") || "light"
        setDarkMode(presentMode)
        const html = document.documentElement
        html.setAttribute("data-theme", presentMode)
    }, [])


    return (
        <div className={`navbar ${darkMode == "dark" ? "text-white" : "text-black"}`}>
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
                    <img className="md:w-[5rem] w-[3rem] md:mr-2" src={logo} alt="" />
                    <Link to='/' className="normal-case md:text-4xl text-lg font-extrabold text-amber-600">TechBond</Link>
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
            <div className="navbar-end flex md:flex-row flex-col gap-1 text-center items-center justify-center">

                <div className="md:mr-2 mr-0 flex md:flex-row flex-col md:mt-0 mt-2 text-center items-center justify-center">
                    {user ? <>
                        <div className="flex items-center justify-center gap-2">

                            <img className="md:w-[3rem] w-[2rem] btn-circle" src={user?.photoURL? user?.photoURL :currentUserInfo?.photo} alt="" />
                            <h1 className="bg-amber-500 px-2 rounded ">{user?.displayName? user?.displayName : currentUserInfo?.name}</h1>
                        </div>
                    </>

                        :

                        ''}
                </div>

                {
                    user ? <Link to='/' onClick={handleLogout} className="px-3 md:py-0.5 md:ml-0 ml-6 rounded font-bold bg-amber-600">Logout</Link> : <Link to='/login' className="btn">Login</Link>
                }


                <button onClick={modeHandler} className="px-3 md:py-0.5 md:ml-0 ml-6  rounded font-bold bg-amber-600">Dark Mode</button>


            </div>
        </div>
    );
};

export default Navbar;