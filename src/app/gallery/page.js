import Image from 'next/image';
import React from 'react';
import messi from "@/assets/messi.jpg"

export const metadata = {
    title:"Gallery",
    description:"This is Gallery"
}
const GalleryPage = () => {
    return (
        <div className='text-center'>
            <h1>Regular image</h1>
            

            <h1>After</h1>
            <Image
            src={messi}
            width={500}
            height={500}
            className='mx-auto'
            alt='image'
            ></Image>
        </div>
    );
};

export default GalleryPage;