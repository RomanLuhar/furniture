import React from 'react'
import { Navbar } from './Navbar'

export const Home = () => {
  return (
    <div>
      <Navbar/>
        <section class="home" id="home">
        <div class="home-text">
            <h1><span>Brown</span>Wood makes your <br/> Comfort and Happiness!</h1>
            <p>BrownWood is making furniture for ages and assuring product Quality. <br/> We believe in Quality and Comfort! Your Comfort is our Happiness!</p>
              
            <a href="shop" class="btn">Shop Now</a>
        </div>
    </section>
    
    </div>
  )
}

