import React from 'react'
import "./Home.css"
import Card from './Card'
import {car} from "../../datas/products/Products"
import Main from '../../components/main/Main'
import About from '../../components/about/About'

function Home() {
  
  
  return (
    <div className='home'>
      <Main />
      <About />
        <div className="container">
        
            <div className='home-main'>

              {car.map((item, index) => (
                <Card key={index.id} {...item} />
              ))}
              

            </div>
        </div>
    </div>
  )
}

export default Home