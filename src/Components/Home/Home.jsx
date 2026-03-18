import React from 'react';
import LatestProducts from '../LatestProducts/LatestProducts';

const latestProductPromise = fetch('http://localhost:3000/latest-product')
.then(res=>res.json())
// .then(data=>{
//     console.log(data)
// })


const Home = () => {
    return (
        <div>
            <p>this is home</p>
            <LatestProducts latestProductPromise={latestProductPromise}></LatestProducts>
        </div>
    );
};

export default Home;