import PropTypes from 'prop-types';


const AvailableBrand = ({brand,handleBrandClick}) => {
    const {brandName,brandLogo} = brand

    return (
        <div onClick={()=>{handleBrandClick(brandName)}} className='border-2 border-amber-600 flex flex-col items-center justify-center rounded-lg p-4'>
          <img className='w-[15rem]' src={brandLogo} alt='brand_Logo' />  
          <h1 className='text-2xl font-bold'>{brandName}</h1>
        </div>
    );
};

AvailableBrand.propTypes ={
    brand: PropTypes.object,
    handleBrandClick: PropTypes.func
}
export default AvailableBrand;