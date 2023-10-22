import PropTypes from 'prop-types';
import { useContext } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleBrandProduct = ({ product }) => {
    const { image, brandName, name, type, price, rating } = product
    const navigate = useNavigate()
    const { authInfo } = useContext(AuthContext)
    const {user} = authInfo


    const handleDetails = (name)=>{
        console.log(name)
        if(user){

            navigate(`/${brandName}/${name}`)
        }
        else{
            toast("Login / Register To View", {
                position: "top-center",
                autoClose: 1000, // Close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
              });
              navigate('/login')
        }
    }

    const handleUpdate = (name)=>{
        console.log(name)
        if(user){

            navigate(`/update/${name}`)
        }
        else{
            toast("Login / Register To View", {
                position: "top-center",
                autoClose: 1000, // Close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
              });
        }
    }



    return (
        <div className='flex flex-col items-center gap-2 border-2 border-amber-600 rounded-lg p-6'>
            <img className='w-[250px] h-[250px] mb-5 p' src={image} alt="product_image" />
            
            <h1>{name}</h1>
            <div className='text-left'>

                <h1>Brand: {brandName}</h1>
                <h1>Type: {type}</h1>
                <h1>Price: {price}/- BDT</h1>
                <h1>Rating: {rating}/10</h1>
            </div>
            <div className='flex gap-10 mb-8 mt-6'>

                <button onClick={()=>{handleDetails(name)}} className='btn bg-amber-500 text-black hover:text-amber-600'>Details</button>
                {
                    user? <Link to={`/update/${name}`}><button onClick={handleUpdate} className='btn bg-amber-600 text-black hover:text-amber-600'>Update</button></Link> : <Link to={`#`}><button onClick={handleUpdate} className='btn bg-amber-600'>Update</button></Link>
                }
                
            </div>
        </div>
    );
};
SingleBrandProduct.propTypes = {
    product: PropTypes.object
}
export default SingleBrandProduct;