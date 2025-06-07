import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ passData }) {
    const [inpVal, setInpVal] = useState("")
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(!show);
    };


    return (
        <div className=" sticky top-0">
            <div className="bg-[#1c1b3b] py-5 text-white  md:flex md:flex-row sm:flex-row  flex flex-col lg:justify-between md:justify-between sm:justify-evenly items-center p-4 px-[25px]">
                <Link to='/' className="text-xl z-50">Beauty Product</Link>
                <ul className="hidden lg:flex gap-6">
                    <Link to='/shop' className=' block cursor-pointer'>Shop</Link>
                    <Link to='/' className=' cursor-pointer'>Beauty</Link>
                    <Link to='/' className=' cursor-pointer'>Fregrances</Link>
                    <Link to='/' className=' cursor-pointer'>Groceries</Link>
                    <Link to='/' className=' cursor-pointer'>Furniture</Link>
                    <li><input onChange={(e) => passData(e.target.value)} type="text" placeholder='Search...' className='bg-white text-black outline-0 rounded-2xl px-4 py-1' /></li>
                </ul>
                <Link to='/shop' className='lg:hidden md:block mt-2 sm:block block cursor-pointer'>Shop</Link>
                <input onChange={(e) => passData(e.target.value)} type="text" placeholder='Search...' className='bg-white lg:hidden md:block sm:block block lg:mt-0 md:mt-0 sm:mt-0 mt-3  text-black outline-0 rounded-2xl pl-2 py-1' />

            </div>
            <div
                className={`fixed top-18 left-0 h-full w-[50%] bg-[#2c2c2c] text-white z-50 transition-transform duration-300 ease-in-out lg:hidden ${show ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-4">
                    <ul className="space-y-4 text-lg">
                        <li>ALL</li>
                        <li>Beauty</li>
                        <li>Mascara</li>
                        <li>Fregrances</li>
                        <li>Groceries</li>
                        <li>Furniture</li>

                    </ul>
                </div>
            </div>
            {show && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
                    onClick={toggleMenu}
                ></div>
            )}
        </div>
    );
}
