import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
   <div className="n-wrapper">
       <div className="n-left">
        <div className="n-name">Chalana</div>
        <span>toggle</span>
        
       </div>
       <div className="n-right">
         <div className="n-list">
            <ul style={{listStyleType:'none'}}>
                <li>Home</li>
                <li>Service</li>
                <li>Experiance</li>
                <li>Portofolio</li>
                <li>Testimonials</li>
            </ul>
         </div>
         <button class="btn">
  RESEUM
</button>
       </div>
   </div>
  )
}

export default Navbar