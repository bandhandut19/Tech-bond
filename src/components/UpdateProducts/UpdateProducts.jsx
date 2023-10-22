import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const UpdateProducts = () => {
    const product = useParams()


    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/allproducts')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const productInfo = products.find(prod => prod.name.toLowerCase() === product.name.toLowerCase())

    const handleUpdateProduct = (e) => {
        e.preventDefault()
        const form = e.target
        const image = form.ProductImageUrl.value
        const name = form.ProductName.value
        const brandName = form.BrandName.value
        const type = form.ProductType.value
        const price = form.ProductPrice.value
        const description = form.ProductDescription.value
        const rating = form.ProductRating.value

        const addProductInfo = { image, name, brandName, type, price, description, rating }


        const {_id} = productInfo

        



        fetch(`http://localhost:5000/allproducts/${_id}`, {
            method: 'PUT',
            headers:
            {
                'content-type': 'application/json'
            }
            ,
            body: JSON.stringify(addProductInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast("Product Updated Successfully", {
                        position: "top-center",
                        autoClose: 1000, // Close after 1 second
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    })
                }
            })
    }
    return (
        <div className="mt-20 w-11/12 mx-auto border-2 border-amber-500 rounded-lg shadow-2xl">
            <div className="flex flex-col text-center items-center justify-center">
                <h1 className="text-2xl font-bold mt-5">UPDATE</h1>
                <h1 className="text-2xl font-bold mt-5">{productInfo?.name}</h1>
            </div>

            <form onSubmit={handleUpdateProduct}>
                <div className="ml-16 grid md:grid-cols-2 grid-cols-1 md:gap-8 p-4" >

                    <div>
                        {/* LEFT SIDE INPUTS */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <input type="text" placeholder="Product image URL" name="ProductImageUrl" defaultValue={productInfo?.image} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" placeholder="Product name" name="ProductName" defaultValue={productInfo?.name} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" placeholder="Brand Name" name="BrandName" defaultValue={productInfo?.brandName} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <input type="text" placeholder="Product type" name="ProductType" defaultValue={productInfo?.type} className="input input-bordered w-full max-w-xs" />
                        </div>

                    </div>
                    <div>
                        {/* RIGHT SIDE INPUTS */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Product price" name="ProductPrice" defaultValue={productInfo?.price} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="Product's description" name="ProductDescription" defaultValue={productInfo?.description} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Product rating out of 10" name="ProductRating" defaultValue={productInfo?.rating} className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                </div>
                <div className="flex items-center justify-center mt-10 mb-10">
                    <input className="btn w-4/5 bg-amber-500" type="submit" value="Update Product" />

                </div>
            </form>
        </div>
    );
};

export default UpdateProducts;