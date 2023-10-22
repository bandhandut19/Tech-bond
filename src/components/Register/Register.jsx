import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { getAuth } from "firebase/auth";
import app from '../../../firebase.config';
import { toast } from 'react-toastify';

export const auth = getAuth(app)


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const inputPassword = form.password.value;
        const photo = form.profilePhoto.value;
        const capitalRegex = /[A-Z]/;
        const specialRegex = /[!@#$%^&*]/;

        if (inputPassword.length < 6) {
            setError("Password should be greater or equal to 6 characters.");
            form.password.value = ''
        } else if (!capitalRegex.test(inputPassword)) {
            setError("Password should contain at least 1 uppercase letter.");
            form.password.value = ''
        } else if (!specialRegex.test(inputPassword)) {
            setError("Password should contain at least one special character.");
            form.password.value = ''
        } else {
            // Password meets the criteria
            
            const userInfo = { name, email, inputPassword, photo };
            if (email && inputPassword) {
                
                try {
                    const result = await createUser(email, inputPassword);
                    console.log(result);
                    toast("Registration Successful", {
                        position: "top-center",
                        autoClose: 1000, // Close after 1 second
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                    form.reset();
                    navigate('/login');
                } catch (error) {
                    setError(error.message);
                    console.log(error);
                }
            }
        }


    };


    return (
        <div className="hero min-h-screen bg-amber-400 rounded-lg mt-16">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Get Ready for a journey where you will be Unlocking innovation, Achieve your desired Tech Gadgets </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-amber-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Photo</span>
                            </label>
                            <input type="text" placeholder="Enter your Photo URL" name="profilePhoto" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" name="password" className="input input-bordered" required />
                            <label className="label mt-4">
                                <Link to='/login' className="label-text-alt ">Already have an account ? <span className="link  text-amber-600  bg-slate-300 p-1 px-4 rounded-lg"> LOGIN NOW </span> </Link>
                            </label>
                            {
                                error ? <p className="text-red-800">{error}</p> : ""
                            }
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-amber-500" type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;