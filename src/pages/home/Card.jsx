import React from 'react'
import { useNavigate } from 'react-router-dom';


function Card({img,title,price,id}) {

    const navigate = useNavigate()
    
    const onButton = () =>{
        navigate(`/productDetail/${id}`)
    }
  return (
        
        <div className='card'>

                <div className='home-Block' onClick={onButton} >
                    <img src={img} alt="" />
                    <div className='text'>
                        <h1>{title}</h1>
                        <h1> price: {price}</h1>
                    </div>
                </div>

            </div>
    
  )
}

export default Card