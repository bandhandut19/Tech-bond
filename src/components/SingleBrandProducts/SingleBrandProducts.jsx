import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleBrandProduct from "../SingleBrandProduct/SingleBrandProduct";


const SingleBrandProducts = () => {
    const name = useParams()
    const [allProducts, setAllProducts] = useState([])
    const [brandResources, setBrandResources] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setAllProducts(data)
                }
            })


    }, [])
    useEffect(() => {
        fetch('brandInfo.json')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setBrandResources(data)
                }
            })
    }, [])
    const brandProducts = allProducts.filter(prod => prod.brandName.toLowerCase() === name.brand.toLowerCase())
    const brandSpecificResources = brandResources.filter(prod => prod.brandName.toLowerCase() === name.brand.toLowerCase())

    const { brandAd_01, brandAd_02, brandAd_03, brandAd_04 } = brandSpecificResources
    return (
        <div className="text-center mt-10">
            <h1 className="text-4xl font-bold mb-10">{name.brand}</h1>


            {
                console.log(brandSpecificResources)
            }


            {/* slider ends */}

            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center justify-center">

                {
                    brandProducts.map(product => <SingleBrandProduct key={product._id} product={product}></SingleBrandProduct>)
                }
            </div>
        </div>
    );
};

export default SingleBrandProducts;