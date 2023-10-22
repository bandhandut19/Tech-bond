import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from 'react-toastify';
const Root = () => {
    
    return (
        <div>
            <div className="md:w-4/5 w-full md:p-0 px-2   mx-auto mt-10">

                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;