import React from 'react'
import "./ProductDetail.css"
import { car } from '../../datas/products/Products'
import { useParams } from 'react-router-dom'


function ProductDetail() {
    const {id} = useParams()
    const data = car.find(item=>item.id===id)
    console.log(data)
    return (
        <div className='product-Detail'>
            <div className="container">
                <img src={data.img} alt="" />
            </div>
        </div>
    )
}

export default ProductDetail