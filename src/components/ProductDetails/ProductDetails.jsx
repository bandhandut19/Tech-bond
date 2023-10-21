import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
    const productDetails = useParams()
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setAllProducts(data)
                }
            })


    }, [])
    const product = allProducts.find(prod => prod.name.toLowerCase() === productDetails.product.toLowerCase())

    const navigate =useNavigate()
    const handleGoBack=()=>{
        navigate(-1)
    }

    return (
        <div>

            <div className="border-2 border-amber-500 p-6 mt-10 text-center rounded-lg">
                <h1 className="text-2xl font-bold">{productDetails.product}</h1>
            </div>

            <div className="flex items-center justify-center w-2/3 mx-auto mt-10">
                <img className="w-1/2" src={product?.image} alt="" />
            </div>

            <div className="flex md:flex-row flex-col gap-5">

                <div className="border-2 border-amber-500 p-6 mt-10 text-center rounded-lg">
                    <h1 className="text-3xl font-bold mb-5">Description</h1>
                    <p>{product?.description}</p>
                </div>
                <div className="border-2 border-amber-500 p-6 mt-10 text-center rounded-lg">
                    <h1 className="text-3xl font-extrabold mb-5 text-green-400">Price</h1>
                    <p className="text-xl font-bold">{product?.price}/- BDT Only</p>
                </div>
            </div>

            <Link><button className="btn w-full mt-6 bg-amber-600">Add to Cart</button></Link>
            <button onClick={handleGoBack} className="btn w-full mt-6 bg-amber-600">Go Back to {product?.brandName} all products</button>
        </div>
    );
};

export default ProductDetails;