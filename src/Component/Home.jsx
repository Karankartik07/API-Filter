import React from 'react'

export default function Home() {
    return (
        <div className='mx-auto'>
            <h2 className='text-center bg-[#1c1b3b] p-2 mt-2 text-white'>Welcome To Our Page</h2>
            <div className="grid grid-cols-1  p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <img src="/ShopImg.png" alt="" />
                <div className='flex flex-col justify-center h-[85%]  items-center'>
                    <p className='text-lg font-bold mb-2'>About Us</p>
                    <p className=' text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ullam ipsam at laborum nemo aspernatur rem nostrum voluptatem magni officiis. Dolorem eaque consequatur excepturi sequi vitae quas vel illum repellendus! Eaque, dolor! Laboriosam sapiente non ex aliquid unde illo necessitatibus, laudantium, nesciunt sunt dolor, esse officiis! Dolores consectetur totam suscipit.</p>
                </div>
            </div>
        </div>
    )
}
