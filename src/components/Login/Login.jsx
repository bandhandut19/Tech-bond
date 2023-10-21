
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useState } from "react";




const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState(null)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
            .then(res => {
                console.log('succesfull')
                
                navigate('/')
            })
            .catch(error => {
                setError(error.message)

            })

        // form.reset()
    }
    return (
        <div className="hero min-h-screen bg-amber-400 rounded-lg mt-16">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Discover tech marvels and embrace the future with us today</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-amber-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" name="password" className="input input-bordered" required />
                            <label className="label mt-4">
                                <Link to='/register' className="label-text-alt ">New Here ? <span className="link  text-amber-600  bg-slate-300 p-1 px-4 rounded-lg"> REGISTER NOW </span> </Link>
                            </label>
                        </div>
                        {
                            error ? <p className="text-red-800">{error}</p> : ""
                        }
                        <div className="form-control mt-6">
                            <input className="btn bg-amber-500" type="submit" value="Login" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;