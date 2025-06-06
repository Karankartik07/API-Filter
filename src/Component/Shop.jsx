import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Shop({ dataShop }) {
    const [cat, setCat] = useState("");
    const [show, setShow] = useState(false);
    const [products, setProduct] = useState([]);

    const fetchApi = async () => {
        try {
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            setProduct(data?.products);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    console.log(dataShop)

    useEffect(() => {
        fetchApi();
    }, []);

    const categoryBtn = (value) => {
        setCat(value);
    };
    const searchData = dataShop ? products.filter((product) => product.title.toLowerCase().includes(dataShop.toLowerCase())) : products;
    console.log(searchData)
    const displayedProducts = cat ? searchData.filter((product) => product.category === cat) : searchData;
    const toggleMenu = () => {
        setShow(!show);
    };

    return (
        <>
            <div className=''>
                <i
                    className={`text-2xl bi ${show ? 'bi-x' : 'bi-list'} cursor-pointer md:hidden top-5 right-5 text-white absolute fixed lg:hidden`}
                    onClick={toggleMenu}
                ></i>
            </div>
            <div className="min-h-screen flex">
                <div className={`w-44 lg:block md:block  lg:sticky md:sticky sm:sticky lg:top-[70px] md:top-[70px] sm:top-[70px] lg:h-[515px] md:h-[515px] sm:h-[475px] fixed h-[400px] ${show ? "block sm:block" : "sm:hidden hidden"}  bg-gray-800 text-white p-5 space-y-4`}>
                    <h2 className="text-2xl font-bold mb-6">Category</h2>
                    <nav className="space-y-2">
                        <Link onClick={() => categoryBtn("")} className="block hover:bg-gray-700 p-2 rounded">All</Link>
                        <Link onClick={() => categoryBtn("fragrances")} className="block hover:bg-gray-700 p-2 rounded">Fragrances</Link>
                        <Link onClick={() => categoryBtn("beauty")} className="block hover:bg-gray-700 p-2 rounded">Beauty</Link>
                        <Link onClick={() => categoryBtn("groceries")} className="block hover:bg-gray-700 p-2 rounded">Groceries</Link>
                        <Link onClick={() => categoryBtn("furniture")} className="block hover:bg-gray-700 p-2 rounded">Furniture</Link>
                    </nav>
                </div>
                <main className="flex-1 bg-gray-100 p-6">
                    <h1 className="text-2xl font-semibold mb-4 capitalize text-center">{cat || 'All Products'}</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            displayedProducts.map((product, index) => (
                                <div className="bg-white shadow-md p-4 rounded" key={index}>
                                    <img src={product.images[0]} alt="Images" className="w-full h-48  rounded" />
                                    <div className="flex justify-evenly mt-2">
                                        <div className='flex items-center'>
                                            <i className='bi bi-star'></i>
                                            <p className='ms-2'>{product.rating}</p>
                                        </div>
                                    </div>
                                    <p className="text-center mt-1"><span className='font-bold'>Review:</span> {product.reviews?.length || 0}</p>
                                    <h5 className="text-center mt-1"><span className='font-bold'>Title:</span> {product.title.slice(0, 15)}</h5>
                                    <p className='text-center mt-1 capitalize'><span className='font-bold'>Category:</span> {product.category}</p>
                                </div>
                            ))
                        }
                    </div>
                </main>
            </div>

        </>
    );
}
