import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MyCartProduct from "../MyCartProduct/MyCartProduct";

const MyCart = () => {

    const [cart,setCart] = useState([])

    const {user} = useContext(AuthContext)
    useEffect(()=>{
        fetch('http://localhost:5000/usercart')
        .then(res=> res.json())
        .then(data => setCart(data))
    },[cart])

    const currentUserCart = cart.filter(prod => prod?.userEmail.toLowerCase() === user?.email.toLowerCase())

    return (
        <div>
            <div className="border-2 border-amber-500 text-center mt-10 p-6 rounded-lg">
            <h1 className="text-3xl text-center font-bold">You have added {currentUserCart.length} GADGETS in your CART <span className="text-4xl text-amber-500">!!</span>  </h1>  

            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 mt-10 gap-5">

            {
                currentUserCart.map(item => <MyCartProduct key={item._id} singleCartItem={item} cart={cart}></MyCartProduct>)
            }          
            </div>
        </div>
    );
};

export default MyCart;