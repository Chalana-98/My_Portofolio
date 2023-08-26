import React from 'react'
import './Services.css'
import Photoshop from '../../img/photoshop.png'
import Card from '../Card/Card'

function Services() {
  return (
   <div className="services">
         {/* left side */}

         <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti hic minima quod, facere quae, 
                <br/>
                molestiae molestias consequatur illo illum architecto ut debitis error saepe dolore culpa quis commodi? Consectetur.
                </span>
                <button class="btn s-button">
  RESEUM
</button>
<div className="blur s-blur" style={{background:
              "rgb(238 210 255)"}}></div>
            

         </div>

         {/* right side */}

         <div className="card">
              <div>
                <Card
                  emoji = {Photoshop}
                  heading = {'Design'}
                  detail = {"Figma, sektch , photoshop, Adobe"}
                  />
                
              </div>
         </div>
   </div>
  )
}

export default Services