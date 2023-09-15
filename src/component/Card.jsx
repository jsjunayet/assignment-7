import { FaBookOpen } from 'react-icons/fa'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Card = ({ cart, evenhandle }) => {
    const { id, img, course_name, details, price, credits } = cart;
    return (
        <div className="">
            <div className="card w-full bg-base-100 shadow-xl p-5">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h1 className="text-[#1C1B1B] font-semibold text-l py-3">{course_name}</h1>
                    <p className="text-[#1C1B1B99]">{details}</p>
                </div>
                <div className="flex justify-between pt-5 pb-7">
                    <p className="text-[#1C1B1B99] font-medium"><span>$</span> price : {price}</p>
                    <p className="text-[#1C1B1B99] font-medium"><FaBookOpen className='inline'></FaBookOpen> Credit : {credits}<span>hr</span></p>
                </div>
                <button onClick={() => evenhandle(cart)} className="w-full bg-[#2F80ED] py-3 px-6 text-center rounded-lg text-white font-semibold text-xl">Select</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Card;