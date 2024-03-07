import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

import logo from "../images/logos.png";
import { MdPhoneInTalk } from "react-icons/md";
import { IoAlarmSharp } from "react-icons/io5";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";



function Navbar() {
  return (
    <nav>
        <div className="containe">

          <div className="nav-top">
            <div className='nav-l'>
              <NavLink className={"tel"} to={"tel:902260780"} ><MdPhoneInTalk className='icons' /><span>+998 90 226 07 80</span></NavLink>
              <NavLink className={"tel"} to={"/"} ><IoAlarmSharp className='icons' /><span>Dush-Shan(09:00 - 20:00)</span></NavLink>
            </div>
            <div className='nav-r'>
              <NavLink className={"nav-icons"} to={"/"} ><FaArrowRightToBracket className='icons ic' />Tizimga kirish</NavLink>
              <NavLink className={"nav-icons"} to={"/"} ><FaUser className='icons ic' />Roʻyxatdan oʻtish</NavLink>
              <NavLink className={"nav-icons"} to={"/"} ><FaFacebook className='icons' /></NavLink>
              <NavLink className={"nav-icons"} to={"/"} ><FaInstagram className='icons' /></NavLink>
              <NavLink className={"nav-icons"} to={"/"} ><FaTelegram className='icons' /></NavLink>
            </div>
          </div> 

          <div className="navbar-block">
            <NavLink className={"logo"} to={"/"}><img src={logo} /></NavLink>
            <div className="navigeyshn">

              <div className="navs-link">

                <NavLink className={"nav-link"} to={"/"}>Asosiy</NavLink>
                <NavLink className={"nav-link"} to={"login"}>Biz haqimizda</NavLink>
                <NavLink className={"nav-link"} to={"about"}>To'lov Turlari</NavLink>
                <NavLink className={"nav-link"} to={"d"}>Elektromobillar</NavLink>
                <NavLink className={"nav-link"} to={"a"}>Aloqa</NavLink>

              </div>
            
            
            <div className="search-shop">
              <NavLink className={"nav-link"} to={"b"}><IoSearchOutline className='shop' /></NavLink>
              <NavLink className={"nav-link"} to={"b"}><MdAddShoppingCart className='shop' /> <span>0</span></NavLink>
            </div>

            <NavLink className={"theme-btn"} to={"b"}><FiPlusCircle className='plus' />
              Qo'shish
            </NavLink>

            </div>
              

          </div>
        </div>
    </nav>
  )
}

export default Navbar