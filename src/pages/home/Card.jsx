import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Home.css"

import { FaStar } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import { FaRoad } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import { BsFuelPump } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

function Card({img,title,urven,commet,auto,distance,liter,model,gibrid,price,id}) {

    const navigate = useNavigate()
    
    const onButton = () =>{
        navigate(`/productDetail/${id}`)
    }
  return (
        
        <div className='card'>

                <div className='home-Block' >
                    <div className="imges"><img src={img} alt="" /><div className='AB'><FaRegHeart /></div></div>
                    
                    <div className='text'>
                        <h1>{title}</h1>
                        <div className="card-block-star">
                            <div className="card-star">
                                <FaStar className='icon-stare' />
                                <FaStar className='icon-stare' />
                                <FaStar className='icon-stare' />
                                <FaStar className='icon-stare' />
                                <FaStar className='icon-stare' />
                                <div className='card-urven'>{urven} ({commet} ming sharh)</div>
                            </div>

                            <div className="card-holat">
                                <div className="card-l">
                                    <TbSteeringWheel className='card-icon-l' /> {auto}
                                </div>
                                <div className="card-l">
                                    <FaRoad className='card-icon-l' /> {distance} km / {liter} litr
                                </div>
                            </div>

                            <div className="card-model">
                                <div className="card-model-l">
                                    <FaCar className='card-icon-l' /> Model: {model}
                                </div>
                                <div className="card-model-l">
                                    <BsFuelPump className='card-icon-l' /> {gibrid}
                                </div>
                            </div>

                            <div className="card-befor">
                                <div className="card-price">{price}</div>
                                <button className='btn-eg' onClick={onButton}>
                                    <MdOutlineRemoveRedEye /> Tafsilotlar
                                </button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
    
  )
}

export default Card