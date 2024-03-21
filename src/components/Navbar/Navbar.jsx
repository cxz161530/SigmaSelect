import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'
import logo from '../assets/logoPic.png'
import cart_icon from '../assets/bagPic.png'
const Navbar=()=>{
    //make a state for set function, default value is Beauty
    const[menu, setMenu]= useState("Home");

    return(
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt= ""/>
                <p>Sigma Select</p>


            </div>
            <ul className = "nav-menu">
              <li onClick={()=>{setMenu('Home')}}>
                <Link to='/'>Home</Link>
                {menu ==="Home"?<span/>:<></>} </li>
              <li onClick={()=>{setMenu('New Arrival')}}>
                <Link to='/NewArrivals'>New Arrival</Link>
                {menu ==="NewArrival"?<span/>:<></>}</li>
              <li onClick={()=>{setMenu('Sale')}}>
                <Link to='/Sale'>Sale</Link>
                {menu ==="Sale"?<span/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src = {cart_icon} alt=""/></Link>
                <div className = "nav-cart-count">0</div>

            </div>



        </div>
    )

}

export default Navbar