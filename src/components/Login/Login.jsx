
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, auth } from "../Providers/AuthProvider";
import { useContext, useState } from "react";
import { toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const Login = () => {

    const provider = new GoogleAuthProvider();

    const handleGoogleProvider = ()=>{
        signInWithPopup(auth,provider)
        .then(res => {
            if(res.user){
                (toast("Logged In Successfully", {
                    position: "top-center",
                    autoClose: 1000, // Close after 1 second
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                }));
                console.log(res.user)
                navigate('/')
            }
        })
        .catch(error =>{
            console.log(error)
        })
    }




    const { authInfo } = useContext(AuthContext)
    const {loginUser}= authInfo;
    const navigate = useNavigate()
    const [error, setError] = useState(null)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
            .then(res => {
                if(res){
                    
                
                (toast("Logged In Successfully", {
                    position: "top-center",
                    autoClose: 1000, // Close after 1 second
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                }));
                
                navigate('/')
    }})
            .catch(error => {
                setError(error.message)

            })

        // form.reset()
    }
    return (
        <div className={`hero min-h-screen bg-amber-400 rounded-lg mt-16 dark:text-white text-black`}>
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Discover tech marvels and embrace the future with us today</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-amber-100">
                    <form className="card-body " onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" name="email" className="input  input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" name="password" className="input input-bordered bg-white" required />
                            <label className="label mt-4">
                                <Link to='/register' className="label-text-alt text-black">New Here ? <span className="link  text-amber-600  bg-slate-300 p-1 px-4 rounded-lg"> REGISTER NOW </span> </Link>
                            </label>
                        </div>
                        {
                            error ? <p className="text-red-800">{error}</p> : ""
                        }
                        <div className="form-control flex gap-2 mt-6">
                            <input className="btn text-black bg-amber-500 hover:bg-white" type="submit" value="Login" />
                            <button onClick={handleGoogleProvider} className="btn  text-black bg-amber-500  hover:bg-white">Log in with Google</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;