import { toast } from 'react-toastify';
const AddProducts = () => {
    const handleAddProduct =(e)=>{
        e.preventDefault()
        const form = e.target
        const image = form.ProductImageUrl.value
        const name = form.ProductName.value
        const brandName = form.BrandName.value
        const type = form.ProductType.value
        const price = form.ProductPrice.value
        const description = form.ProductDescription.value
        const rating = form.ProductRating.value

        const addProductInfo = {image,name,brandName,type,price,description,rating}
        console.log(addProductInfo)

        fetch('https://tech-bond-server.vercel.app/allproducts',{
            method: 'POST',
            headers:
                {
                    'content-type': 'application/json'
                }
            ,
            body: JSON.stringify(addProductInfo)
        })
        .then(res=> res.json())
        .then(data => {
            if(data){
                toast("Product Added Successfully", {
                    position: "top-center",
                    autoClose: 1000, // Close after 1 second
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                })
                form.reset()

            }
        })
    }
    return (
        <div className="mt-20 w-11/12 mx-auto border-2 border-amber-500 rounded-lg shadow-2xl">
            <form onSubmit={handleAddProduct}>
                <div className="ml-16 grid md:grid-cols-2 grid-cols-1 md:gap-8 p-4" >

                    <div>
                        {/* LEFT SIDE INPUTS */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <input type="text" placeholder="Product image URL" name="ProductImageUrl" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" placeholder="Product name" name="ProductName" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" placeholder="Brand Name" name="BrandName" className="input input-bordered w-full max-w-xs"required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <input type="text" placeholder="Product type" name="ProductType" className="input input-bordered w-full max-w-xs" required />
                        </div>

                    </div>
                    <div>
                        {/* RIGHT SIDE INPUTS */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Product price" name="ProductPrice" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="Product's description" name="ProductDescription" className="input input-bordered w-full max-w-xs"  required/>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Product rating out of 10" name="ProductRating" className="input input-bordered w-full max-w-xs" required />
                        </div>
                    </div>

                </div>
                <div className="flex items-center justify-center mt-10 mb-10">
                    <input className="btn w-4/5 bg-amber-500 text-black hover:text-amber-600" type="submit" value="Add Product" />

                </div>
            </form>
        </div>
    );
};

export default AddProducts;