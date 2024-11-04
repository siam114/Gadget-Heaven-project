import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect( ()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl font-bold text-center pb-10'>Explore Cutting-Edge Gadgets</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    products.map(product => <Product key={product.product_id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default Products;