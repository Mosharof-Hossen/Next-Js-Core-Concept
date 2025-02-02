import Image from 'next/image';
import React from 'react';

const ProductCart = ({product}) => {
    // console.log(product);
    return (
        <div className='border p-5 w-full rounded space-y-2'>
            <Image 
            src={product.image}  
            alt='product image'
            width={1500}
            height={800}
            ></Image>
            <h1 className='text-2xl font-extrabold'>{product.productName}</h1>
            <p className='text-gray-500'>Brand: {product.category}</p>
            <h3 className='text-xl text-blue-500'>$ {product.price}</h3>
            <div className='flex justify-between'>
                <button className='bg-black text-white px-2 py-1 rounded'>See Details</button>
                <button className='bg-black text-white px-2 py-1 rounded'>Buy Now</button>
            </div>

        </div>
    );
};

export default ProductCart;