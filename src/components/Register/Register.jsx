import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { getAuth } from "firebase/auth";
import app from '../../../firebase.config';


export const auth = getAuth(app)


const Register = () => {
    const { createUser, user} = useContext(AuthContext)
    const navigate = useNavigate()

    const [error, setError] = useState(null)

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.profilePhoto.value;

        const userInfo = { name, email, password, photo }

        if (email && password) {
            try {
                const result = await createUser(email, password);
                console.log('Registration successful:', result.user);
                user(userInfo)
                form.reset();
                navigate('/login')
            } catch (error) {
                setError(error.message)
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