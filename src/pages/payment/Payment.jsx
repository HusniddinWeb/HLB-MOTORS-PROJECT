import React from 'react'
import "./Payment.css"
import { NavLink } from 'react-router-dom'

import { FaAnglesRight } from "react-icons/fa6";

function Payment() {
  return (
    <div className='payments'>

      <div className="main-block payment">
        <h1 className='brend-title'>To'lov Turlari</h1>
        <div className="nav-brend">
          <NavLink className="brent-icons" to={"/"} >Asosiy</NavLink>
          <FaAnglesRight />
          <h4>To'lov Turlari</h4>
        </div>
      </div>

    </div>
  )
}

export default Payment