import PropTypes from 'prop-types';
import {useNavigate } from 'react-router-dom';

const SingleBrandProduct = ({ product }) => {
    const { image, brandName, name, type, price, rating } = product
    const navigate = useNavigate()



    const handleDetails = (name)=>{
        console.log(name)
        navigate(`/${brandName}/${name}`)
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

                <button onClick={()=>{handleDetails(name)}} className='btn bg-amber-500'>Details</button>
                <button className='btn bg-amber-600'> Update</button>
            </div>
        </div>
    );
};
SingleBrandProduct.propTypes = {
    product: PropTypes.object
}
export default SingleBrandProduct;