import { useState } from "react";
import PropTypes from 'prop-types'; 
const MyCartProduct = ({singleCartItem,cart}) => {
    const {_id,productinfo} = singleCartItem
    const {image,name,brandName,type,price,description,rating} = productinfo
    const [updatedCart,setUpdatedCart] = useState(cart)

    
    const handleRemoveCart = (_id)=>{
        console.log(_id)
        fetch(`http://localhost:5000/usercart/${_id}`,{
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
    }
    return (
        <div className="flex flex-col items-center justify-center border-2 border-amber-600 rounded-lg p-2">
            <div className="flex-grow">
                <img className="w-[15rem]" src={image} alt="" />
            </div>
            <div className="text-center bg-amber-500 px-1 py-3 mt-10 rounded-lg">
                <h1 className="text-xl font-semibold">{name}</h1>
                <h1 className="text-lg font-bold text-green-700">Price: {price}/- BDT Only</h1>
            </div>
            <button onClick={()=>{handleRemoveCart(_id)}} className="btn bg-amber-500 mt-5 mb-5">Remove From Cart</button>
        </div>
    );
};
MyCartProduct.propTypes ={
    singleCartItem: PropTypes.object,
    cart: PropTypes.array,
}

export default MyCartProduct;