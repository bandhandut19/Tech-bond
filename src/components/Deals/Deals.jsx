import { PiStudentFill } from 'react-icons/pi';
import { BsFillGiftFill } from 'react-icons/bs';
import { MdCrisisAlert } from 'react-icons/md';
import { FaMedal } from 'react-icons/fa';
const Deals = () => {
    return (
        <>
        <h1 className="text-4xl font-bold bg-amber-400 p-4 text-black text-center mb-10 rounded-lg">Exclusive Tech Deals and Promotions</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center justify-center text-black">
            <div className="bg-amber-400 flex flex-col items-center justify-center text-center p-10 rounded-2xl bg-opacity-90">
                <div>
                    <PiStudentFill className='text-8xl '></PiStudentFill>
                </div>
                <h1 className='text-3xl font-bold mb-5'>Back to School Special</h1>
                <p>Get ready for the school year with exclusive discounts on laptops, tablets, and accessories. Save up to 20% on select back-to-school tech essentials.</p>
            </div>

            <div className="bg-amber-400 flex flex-col items-center justify-center text-center p-10 rounded-2xl bg-opacity-90">
                <div>
                    <BsFillGiftFill className='text-8xl '></BsFillGiftFill>
                </div>
                <h1 className='text-3xl font-bold mb-5'>Tech Bundle Extravaganza</h1>
                <p> Upgrade your tech game with our bundle deals. Buy a laptop, tablet, and smartphone together and save 15% on the total purchase price.</p>
            </div>

            <div className="bg-amber-400 flex flex-col items-center justify-center text-center p-10 rounded-2xl bg-opacity-90">
                <div>
                    <MdCrisisAlert className='text-8xl '></MdCrisisAlert>
                </div>
                <h1 className='text-3xl font-bold mb-5'> Weekly Flash Sale</h1>
                <p> Dont miss our weekly flash sale! Every Friday, we unveil a new set of discounted tech products. Save big on everything from headphones to smartwatches.</p>
            </div>

            <div className="bg-amber-400 flex flex-col items-center justify-center text-center p-10 rounded-2xl bg-opacity-90">
                <div>
                    <FaMedal className='text-8xl '></FaMedal>
                </div>
                <h1 className='text-3xl font-bold mb-5'>Loyalty Rewards Program</h1>
                <p>Join our loyalty program and earn points with every purchase. Redeem your points for discounts, free accessories, or even a tech gadget of your choice..</p>
            </div>


        </div>
    </>
    );
};

export default Deals;