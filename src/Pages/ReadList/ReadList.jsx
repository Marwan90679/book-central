import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from "../../addToDB";
import { VscGlobe } from "react-icons/vsc";
import { GiHumanTarget } from "react-icons/gi";
import { IoDocumentTextOutline } from "react-icons/io5";
const ReadList = () => {


  const[readList,setReadList]=useState([])

const data =useLoaderData();

useEffect(()=>{
  const storedBookData =getStoredBook();
  const convertedBookId = storedBookData.map(id=>parseInt(id));
  const myReadList =data.filter(book=>convertedBookId.includes(book.bookId));
  setReadList(...readList,myReadList)
},[])



  return (
   <div className="mt-15">
    <div className="-mt-5 bg-zinc-50 text-center font-bold text-3xl py-5 rounded-lg mb-12">
      <h1>Books</h1>
    </div>
     <Tabs>
    <TabList>
      <Tab><p className="text-lg font-bold">Readlist</p></Tab>
      <Tab ><p className="text-lg font-bold">Wishlist</p></Tab>
    </TabList>

    <TabPanel>
    <div className="mt-10">
    {
      readList.map((bookToRead,i)=>
      <div key={i} className="border flex rounded-xl">
        <div className="bg-zinc-50 m-5 py-10 px-15 rounded-xl"><img className=" drop-shadow-neutral-600 drop-shadow-xl w-50 h-70 object-cover rounded-lg"  src={bookToRead.image} alt="" /></div>
        <div >
          <h3 className="mt-5">{bookToRead.bookName}</h3>
          <p>By : {bookToRead.author}</p>
          <p>Tags : {bookToRead.tags.map((tag,i)=>       
            <div key={i} className="mr-3 badge bg-amber-300">#{tag}</div>)}
            </p>
            <div className="flex">
            <div className="flex space-x-2 items-center mr-2 justify-between">
            <p><GiHumanTarget /></p>
            <p>Publisher : {bookToRead.publisher}</p>
           </div>
           <div className="flex items-center  justify-between">
           <p><IoDocumentTextOutline /></p>
           <p>Pages : {bookToRead.totalPages}</p>
           </div>
            </div>
        </div>
        </div>)
      }
    </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
   </div>
  );
};

export default ReadList;
