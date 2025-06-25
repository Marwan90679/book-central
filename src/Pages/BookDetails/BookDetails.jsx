import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaStarHalfAlt } from "react-icons/fa";
import { addToStorageDB } from '../../addToDB';

const BookDetails = () => {
  const { id } = useParams();
  const convertedId = parseInt(id);
  const booksData = useLoaderData();

  const handleMarkAsRead = (id) => {
    addToStorageDB(id);
  };

  const bookInfo = booksData.find((book) => book.bookId === convertedId);

  if (!bookInfo) {
    return <p className="text-center text-xl mt-10">Book not found.</p>;
  }

  const {
    image,
    description,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    bookName,
  } = bookInfo;

  return (
    <div className="flex flex-col md:flex-row mt-20 gap-12 px-4 md:px-12">
      {/* Book Image */}
      <div className="bg-zinc-50 p-6 rounded-lg shadow-md">
        <img
          className="shadow-xl w-80 rounded"
          src={image}
          alt={bookName}
        />
      </div>

      {/* Book Details */}
      <div className="max-w-2xl">
        <h3 className="text-3xl font-semibold pb-4 playfair-display">{bookName}</h3>
        <p className="text-lg font-medium text-gray-700 pb-4">By: {author}</p>
        <hr className="mb-2 border-gray-300" />
        <p className="text-lg font-medium text-gray-800">{category}</p>
        <hr className="my-2 border-gray-300" />

        <p className="pt-4 font-bold">Description:
          <span className="font-normal text-gray-700"> {description}</span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center py-4">
          <p className="text-lg font-semibold mr-2">Tags:</p>
          {tags.map((tag, index) => (
            <div key={index} className="badge badge-success mr-2 mt-2">
              {tag}
            </div>
          ))}
        </div>

        <hr className="border-gray-300" />

        {/* More Info */}
        <div className="space-y-3 mt-5 text-gray-800">
          <div className="flex justify-between">
            <p>Number of Pages:</p>
            <p className="font-bold">{totalPages}</p>
          </div>
          <div className="flex justify-between">
            <p>Publisher:</p>
            <p className="font-bold">{publisher}</p>
          </div>
          <div className="flex justify-between">
            <p>Year of Publishing:</p>
            <p className="font-bold">{yearOfPublishing}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Rating:</p>
            <p className="flex items-center font-bold">
              {rating}
              <FaStarHalfAlt className="ml-2 text-yellow-500" size={16} />
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 space-x-4">
          <button
            onClick={() => handleMarkAsRead(id)}
            className="px-6 py-2 border rounded-lg border-purple-500 text-purple-700 hover:bg-purple-50 transition"
          >
            Mark as Read
          </button>
          <button
            className="px-6 py-2 rounded-lg text-white bg-[#50B1C9] hover:bg-[#3b94a9] transition"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
