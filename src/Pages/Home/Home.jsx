import React from 'react';
import Books from '../Books/Books';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData();

    return (
        <div>
           <Banner></Banner>
           <Books data={data}></Books>
        </div>
    );
};

export default Home;