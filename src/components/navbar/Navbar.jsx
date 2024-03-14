import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';

import logo from "../images/logos.png";
import { MdPhoneInTalk } from "react-icons/md";
import { IoAlarmSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";



function Navbar() {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
        <div className="containe">

          <div className={isSticky ? 'sticky' : ''}>
            
              <div className="nav-top">
                <div className='nav-l'>
                  <NavLink className={"tel"} to={"tel:910620770"} ><MdPhoneInTalk className='icons' /><span>+998 91 062 07 70</span></NavLink>
                  <NavLink className={"tel"} to={"/"} ><IoAlarmSharp className='icons' /><span>Dushanba-Shanba(09:00 - 20:00)</span></NavLink>
                </div>
                <div className='nav-r'>
                  {/* <NavLink className={"nav-icons"} to={"/"} ><FaArrowRightToBracket className='icons ic' />Tizimga kirish</NavLink>
                  <NavLink className={"nav-icons"} to={"/"} ><FaUser className='icons ic' />Roʻyxatdan oʻtish</NavLink> */}
                  <NavLink className={"nav-icons"} to={"/"} ><FaFacebook className='icons' /></NavLink>
                  <NavLink className={"nav-icons"} to={"/"} ><FaInstagram className='icons' /></NavLink>
                  <NavLink className={"nav-icons"} to={"/"} ><FaTelegram className='icons' /></NavLink>
                  <NavLink className={"nav-icons"} to={"/"} ><FaYoutube  className='icons' /></NavLink>
                </div>
            </div>                          

          </div> 

          <div className="navbar-block">
            <NavLink className={"logo"} to={"/"}><img src={logo} /></NavLink>
            <div className="navigeyshn">

              <div className="navs-link">

                <NavLink className={"nav-link"} to={"/"}>Asosiy</NavLink>
                <NavLink className={"nav-link"} to={"aboutUs"}>Biz haqimizda</NavLink>
                <NavLink className={"nav-link"} to={"payment"}>To'lov Turlari</NavLink>
                <NavLink className={"nav-link"} to={"electricCars"}>Elektromobillar</NavLink>
                <NavLink className={"nav-link"} to={"contact"}>Aloqa</NavLink>

              </div>
            
            
            <div className="search-shop">
              <label htmlFor="" className='nav-label'>
                <input type="text" className='nav-inp' placeholder="kalit so'z" />
                <button className='nav-btn'><IoSearchOutline className='shop' /></button>
              </label>
              {/* <NavLink className={"nav-link"} to={"b"}><MdAddShoppingCart className='shop' /> <span>0</span></NavLink> */}
            </div>

            {/* <NavLink className={"theme-btn"} to={"b"}><FiPlusCircle className='plus' />
              Qo'shish
            </NavLink> */}

            </div>
              

          </div>

        </div>
    </nav>
  )
}

export default Navbar