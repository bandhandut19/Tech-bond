import { useEffect, useState } from "react";
import AvailableBrand from "../AvailableBrand/AvailableBrand";
import { useNavigate } from 'react-router-dom';

const AvailableBrands = () => {
    const [brands, setBrands] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        fetch('brandInfo.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    const handleBrandClick = (name) => {
        // const clickedBrand = name.toLowerCase()
        // console.log(clickedBrand)
        navigate(`/${name}`)
    }

    return (
        <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold">Choose Your Aquainted Brand</h1>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-4 mt-8">

                {
                    brands.map(brand => <AvailableBrand key={brand.id} brand={brand} handleBrandClick={handleBrandClick}></AvailableBrand>)
                }
                
            </div>
        </div>
    );
};

export default AvailableBrands;