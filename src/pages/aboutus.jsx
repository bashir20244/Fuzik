import React from 'react'
import "./aboutus.css"
import Img from '../../components/images/fuzik.jpg'


function aboutus() {
  return (
    <section className='about-us'>
    <div className='title'>
      <p>About Us</p>
    </div>

  <div className='about-1'>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sunt, quod facere commodi ab nam corrupti cumque fuga totam maxime necessitatibus iusto dolores veniam odio adipisci dolor doloribus aut voluptas!</p>
      <img src={Img } className='right-image'/>
  </div>
  <div className='about-1'>
      
      <img src={Img } className='left-image'/>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sunt, quod facere commodi ab nam corrupti cumque fuga totam maxime necessitatibus iusto dolores veniam odio adipisci dolor doloribus aut voluptas!</p>
  </div>
  </section>
  )
}

export default aboutus