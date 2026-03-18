import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {
const {user,signoutUser}=use(AuthContext)
const handleSignout=()=>{
  signoutUser()
  .then(res=>{
    console.log(res)
  })
  .catch(err=>{
    console.log(err)
  })
}
const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/allProducts">All Products</NavLink></li>

      
      {user && (
        <>
          <li><NavLink to="/myBids">My Bids</NavLink></li>
          <li><NavLink to="/myProduct">My Products</NavLink></li>
          <li><NavLink to="/createProduct">Create Products</NavLink></li>
        </>
      )}
    </>
  );

const [theme,setTheme]=useState(localStorage.getItem('theme') || 'light')
useEffect(()=>{
  const html = document.querySelector('html')
  html.setAttribute("data-theme",theme)
  localStorage.setItem('theme',theme)
},[theme])
const handleTheme = (checked)=>{
  setTheme(checked ? "dark" : "light")
}




    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Smart Deals</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {/* theme */}
    <input onChange={(e)=>handleTheme(e.target.checked)} 
    defaultChecked={localStorage.getItem('theme') === "dark"}
    type="checkbox" value="synthwave" className="toggle theme-controller" />


    {user?          <Link onClick={handleSignout} className="btn">Signout</Link>:

      <Link to='/signup' className="btn">Signin</Link>

    }
  </div>
</div>
        </div>
    );
};

export default Navbar;