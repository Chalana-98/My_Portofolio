import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'

function Navbar() {
  return (
   <div className="n-wrapper">
       <div className="n-left">
        <div className="n-name">Chalana</div>
        <Toggle/>
        
       </div>
       <div className="n-right">
         <div className="n-list">
            <ul style={{listStyleType:'none'}}>
                <li>Home</li>
                <li>Service</li>
               
                <li>Portofolio</li>
               
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