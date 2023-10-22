import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/dK8QZBZ/error.webp" alt="Album" /></figure>
            <div className="card-body flex items-center mt-40">
                <h2 className="card-title text-6xl text-red-600">404</h2>
                <p className="md:text-5xl text-3xl font-bold mt-5">Page Not Found</p>
                <div className="card-actions justify-end">
                    <Link to='/'>
                        <button className="btn btn-primary md:mt-0 mt-8">Go back to Home</button>
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;