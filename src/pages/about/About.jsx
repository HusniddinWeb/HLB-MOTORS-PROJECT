import React from 'react'
import "./About.css"

function About({name}) {
  console.log(name)
  return (
    <div className="about">
        <div className="container">
            <h1>Ism: <span>{name.ism}</span></h1>
            <h1>Email: <span>{name.email}</span> </h1>
            <h1>Parol: <span>{name.parol}</span> </h1>
        </div>
    </div>
  )
}

export default About