import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="w-4/5 mx-auto mt-10">

                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;