import { MdHomeRepairService } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { BsHeadphones } from 'react-icons/bs';
import { GrWorkshop } from 'react-icons/gr';
const Services = () => {
    return (
        <>
            <h1 className="text-4xl font-bold bg-amber-500 rounded p-4 text-black text-center mb-10 rounded-lg">Our Services</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center justify-center text-black mb-20">
                <div className="bg-amber-600 flex flex-col items-center justify-center text-center p-10 rounded-2xl bg-opacity-90">
                    <div>
                        <MdHomeRepairService className='text-8xl '></MdHomeRepairService>
                    </div>
                    <h1 className='text-3xl font-bold mb-5'>Device Repairs</h1>
                    <p>We offer expert repair services for smartphones, tablets, laptops, and more, ensuring your devices stay in top condition.</p>
                </div>

                <div className="bg-amber-600 flex flex-col items-center justify-center text-center p-10 rounded-2xl bg-opacity-90">
                    <div>
                        <IoIosPeople className='text-8xl '></IoIosPeople>
                    </div>
                    <h1 className='text-3xl font-bold mb-5'>Product Consultation</h1>
                    <p>Our knowledgeable staff helps you make informed choices, guiding you through a wide range of tech products and brands.</p>
                </div>

                <div className="bg-amber-600 flex flex-col items-center justify-center text-center p-10 rounded-2xl bg-opacity-90">
                    <div>
                        <BsHeadphones className='text-8xl '></BsHeadphones>
                    </div>
                    <h1 className='text-3xl font-bold mb-5'>Tech Accessories</h1>
                    <p>Discover a wide selection of high-quality accessories, from cases to chargers, enhancing your tech experience.</p>
                </div>

                <div className="bg-amber-600 flex flex-col items-center justify-center text-center p-10 rounded-2xl bg-opacity-90">
                    <div>
                        <GrWorkshop className='text-8xl '></GrWorkshop>
                    </div>
                    <h1 className='text-3xl font-bold mb-5'>Tech Workshops</h1>
                    <p>Join our tech workshops and stay updated on the latest trends, tips, and tricks in the ever-evolving world of technology.</p>
                </div>


            </div>
        </>
    );
};

export default Services;