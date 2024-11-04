import React from 'react';

const Category = () => {
    return (
        <div className='card card-compact bg-base-100 px-5 py-5 w-[200px] shadow-xl space-y-4'>
            <button className='bg-[#09080f1f] px-4 py-2 hover:font-medium rounded-full hover:bg-[#9538E2] hover:text-white'>All Product</button>
            <button className='bg-[#09080f1f] px-4 py-2 hover:font-medium rounded-full hover:bg-[#9538E2] hover:text-white'>Laptops</button>
            <button className='bg-[#09080f1f] px-4 py-2 hover:font-medium rounded-full hover:bg-[#9538E2] hover:text-white'>Phones</button>
            <button className='bg-[#09080f1f] px-4 py-2 hover:font-medium rounded-full hover:bg-[#9538E2] hover:text-white'>Accessories</button>
            <button className='bg-[#09080f1f] px-4 py-2 hover:font-medium rounded-full hover:bg-[#9538E2] hover:text-white'>Smart Watches</button>
            <button className='bg-[#09080f1f] px-4 py-2 hover:font-medium rounded-full hover:bg-[#9538E2] hover:text-white'>MacBook</button>
            <button className='bg-[#09080f1f] px-4 py-2 hover:font-medium rounded-full hover:bg-[#9538E2] hover:text-white'>Iphone</button>
        </div>
    );
};

export default Category;