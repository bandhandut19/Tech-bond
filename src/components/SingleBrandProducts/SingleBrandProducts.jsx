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
    const brandSpecificResources = brandResources?.find(prod => prod?.brandName?.toLowerCase() === name?.brand?.toLowerCase())

    const { brandAd_01, brandAd_02, brandAd_03, brandAd_04 } = brandSpecificResources || {}
    return (
        <div className="text-center mt-10">
            <h1 className="text-5xl font-bold mb-10">{name.brand}</h1>

            <div className="carousel w-full mb-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={brandAd_01} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-amber-600">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-amber-600">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={brandAd_02} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-amber-600">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-amber-600">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={brandAd_03} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-amber-600">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-amber-600">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={brandAd_04} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-amber-600">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-amber-600">❯</a>
                    </div>
                </div>
            </div>



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