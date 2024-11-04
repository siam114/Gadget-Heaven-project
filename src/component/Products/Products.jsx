import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import Category from '../Category/Category';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect( ()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='mb-10 sm:mb-20'>
            <h2 className='text-3xl font-bold text-center pb-10'>Explore Cutting-Edge Gadgets</h2>
            <div className='sm:flex sm:justify-between mx-5 sm:mx-auto gap-5'>
                <div className='flex justify-center pb-5 sm:h-[440px]'>
                    <Category/>
                </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product key={product.product_id} product={product}/>)
                }
            </div>
            </div>
        </div>
    );
};

export default Products;