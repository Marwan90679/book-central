import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';
const Book = ({book}) => {
    const{image,author,bookName,tags,category,rating,bookId}=book;
    return (
     <Link to={`/bookDetails/${bookId}`}>
        <div className='border border-zinc-300  rounded-xl flex flex-col'>
            <div className='bg-zinc-50 py-10 m-5 rounded-xl'>
                <img className=' w-35 h-55 object-cover mx-auto drop-shadow-neutral-500 drop-shadow-2xl' src={image} alt="" />
                </div>
            <div className='ml-5 mr-5 pb-3 space-y-3 border-b border-dashed  flex-1'>
           <div>
           {
                tags.map(tag=><div className="bg-[#174b2e] mr-2  text-white badge badge-ghost">{tag}</div>
                    )
            }
           </div>
                <h3 className='playfair-display text-xl font-semibold'>{bookName}</h3>
                <p className='text-lg font-medium'>By: {author}</p>
            </div>
            <div className='flex justify-between mx-5 my-5'>
                <p className='font-semibold text-lg'>{category}</p>
               <div className='flex items-center space-x-2'>
               <p className='text-xl font-semibold'>{rating}</p>
                <FaStarHalfAlt className='-mt-1' size={20}/>
               </div>
            </div>
        </div>
     </Link>
    );
};

export default Book;