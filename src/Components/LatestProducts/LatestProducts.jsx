import React, { use } from 'react';
import Product from '../Product/Product';

const LatestProducts = ({latestProductPromise}) => {
    
    const products = use(latestProductPromise);
    console.log(products)
    if (!products) {
  return <p>Loading...</p>;
}
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-center text-4xl font-bold'>Recent Products</h2>
           <div className='grid grid-cols-3 gap-6 '>
             {
                products.map(product=><Product key={product._id} product={product}></Product>)
            }
           </div>
        </div>
    );
};

export default LatestProducts;