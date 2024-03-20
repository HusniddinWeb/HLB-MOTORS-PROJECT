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
import { RxHamburgerMenu } from "react-icons/rx";



function Navbar() {

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };


  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id='nav'>
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
                  <NavLink className={"nav-icons"} to={"https://www.facebook.com/profile.php?id=61551063302690"} target='_blank' ><FaFacebook className='icons' /></NavLink>
                  <NavLink className={"nav-icons"} to={"https://www.instagram.com/hlb_motors2023"} target='_blank' ><FaInstagram className='icons' /></NavLink>
                  <NavLink className={"nav-icons"} to={"https://t.me/hlbmotors2023"} target='_blank' ><FaTelegram className='icons' /></NavLink>
                  <NavLink className={"nav-icons"} to={"https://www.youtube.com/"} target='_blank' ><FaYoutube  className='icons' /></NavLink>
                </div>
            </div>                          

          </div> 

          <div className="navbar-block">
          {/* <a href="#scroll" className='logo'></a> */}
            <NavLink className={"logo"} to={"/"}><img src={logo} /></NavLink>
            <div className="navigeyshn">

              <div className={`navs-link ${isActive ? 'active-input' : ''}`} id='man' >

                <NavLink className={"nav-link"} to={"/"} onClick={toggleMenu}>Asosiy</NavLink>
                <NavLink className={"nav-link"} to={"aboutUs"} onClick={toggleMenu}>Biz haqimizda</NavLink>
                <NavLink className={"nav-link"} to={"payment"} onClick={toggleMenu}>To'lov Turlari</NavLink>
                <NavLink className={"nav-link"} to={"electricCars"} onClick={toggleMenu}>Elektromobillar</NavLink>
                <NavLink className={"nav-link"} to={"contact"} onClick={toggleMenu}>Aloqa</NavLink>

              </div>
            
            <div className="search-shop">
              <label htmlFor="" className='nav-label'>
                <input type="text" className='nav-inp' placeholder="kalit so'z" />
                <button className='nav-btn'><IoSearchOutline className='shop' /></button>
              </label>
              <div className='hamburger' onClick={toggleMenu}><RxHamburgerMenu className='hamburger-icon' /></div>
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