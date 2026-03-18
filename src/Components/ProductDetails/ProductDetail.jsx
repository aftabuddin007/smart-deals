import React, { use, useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const ProductDetail = () => {
    const {email:productId}=useLoaderData()
    const {user} = use(AuthContext);
    const product = useLoaderData();
    const [useBid,setUseBid] = useState([])
const bidModalRef = useRef(null)
    // console.log(product)

useEffect(()=>{
   axios.get(`http://localhost:3000/products/${productId}`,{
     headers:{
            authorization:`Bearer ${user.accessToken}`
          }
   }).
   then(data=>{
    console.log('after axios get',data)
   }) 
    

},[productId])
// useEffect(()=>{
//     fetch(`http://localhost:3000/products/bidData/${productId}`,{
//           headers:{
//             authorization:`Bearer ${user.accessToken}`
//           }
//         })
//     .then(res=>res.json())
//     .then(data=>{
//         console.log('after bids',data)
//         setUseBid(data)
//     })

// },[productId,user])







const handleBidModalOpen = ()=>{
    bidModalRef.current.showModal()
}
const handleSubmit=(e)=>{
e.preventDefault()
const name = e.target.name.value
const email = e.target.email.value
const bid = e.target.bid.value
// console.log(email,name,productId,bid)

const newBids = {
    product:productId,
    buyer_name:name,
    buyer_email:email,
    buyer_image:user?.photoURL,
    bid_price:bid,
    status:'pending'
}
fetch('http://localhost:3000/bidData',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(newBids)
})
.then(res=>res.json())
.then(data=>{
if(data.insertedId){
    bidModalRef.current.close();
    toast.success('Your bid is submitted')
// add the new bid
newBids._id = data.insertedId
const newBid = [...useBid,newBids]
newBid.sort((a,b)=>b.bid_price - a.bid_price)
setUseBid(newBid)



}
})

}







    return (
        <div>
          <p>My description: {useBid.length}</p>
          <p>{useBid.title}</p>
            <div>
<button onClick={handleBidModalOpen}
 className='btn btn-primary'>I want buy this product</button>

<dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
     <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-center text-xl font-semibold mb-6">
          Give Seller Your Offered Price
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
            //   value={formData.name}
            //   onChange={handleChange}
            readOnly
            defaultValue={user?.displayName}
              className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
            //   value={formData.email}
            //   onChange={handleChange}
            readOnly
            defaultValue={user?.email}
              className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <input
            type="url"
            name="image"
            placeholder="https://...your_img_url"
            // value={formData.image}
            // onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="text"
            name="bid"
            placeholder="Your bid"
            // value={formData.price}
            // onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="text"
            name="contact"
            placeholder="e.g. +1-555-1234"
            // value={formData.contact}
            // onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="flex justify-end gap-4 mt-6">
            <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Cancle</button>
      </form>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              Submit Bid
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="modal-action">
     
    </div>
  </div>
</dialog>
            </div>
            <div>
<h3 className='text-2xl'>Bids for this products: <span className='text-bold'>{useBid.length}</span></h3>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          SL number
        </th>
        <th>Buyer Name</th>
        <th>Buyer Email</th>
        <th>Bid Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        useBid.map((bid,index)=> <tr>
        <th>
        {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={bid.buyer_image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{bid.buyer_name}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          
          <br />
          <span className="badge badge-ghost badge-sm">{bid.buyer_email}</span>
        </td>
        <td>${bid.bid_price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)
      }
      
    
    </tbody>
   
  </table>
</div>



            </div>
        </div>
    );
};

export default ProductDetail;