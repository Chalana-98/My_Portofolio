import React from 'react'
import './Services.css'
import Card from '../Card/Card'
import Designer from '../../img/designer.png'
import Developer from '../../img/developer.png'
import UIUX from '../../img/uiux-01.png'
import Flutter from '../../img/flutter.png'
import Android from '../../img/android.png'


import Illust from '../../img/Illust.png'
import ReactJS from '../../img/reactjs.png'
import Angular from '../../img/angular.png'
import Laravel from '../../img/laravel.png'

function Services() {
  return (
   <div className="services">
         {/* left side */}

         <div className="awesome " >
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti hic minima quod, facere quae, 
                <br/>
                molestiae molestias consequatur illo illum architecto ut debitis error saepe dolore culpa quis commodi? 
                </span>
                <div className="w-right">

                <div className="w-mainCircle">

                  <div className="w-secCircle">
                    <img src={Angular} alt="" />
                  </div>
                  <div className="w-secCircle">
                    <img src={Flutter} alt="" />
                  </div>
                  <div className="w-secCircle">
                    <img src={Laravel} alt="" />
                  </div>
                  <div className="w-secCircle">
                    <img src={ReactJS} alt="" />
                  </div>
                  <div className="w-secCircle">
                     <img src={Android} alt="" />
                  </div>
                  {/* background circle */}
                  
                  
                  

                </div>
                </div>
<div className="blur s-blur" style={{background:
              "rgb(238 210 255)"}}></div>
            

         </div>
    
         {/* right side */}

         <div className="cards">
              <div style={{left:'10rem'}} >
                <Card 
                  emoji = {Designer}
                  heading = {'Design'}
                  detail = {"Figma, sektch , photoshop, Adobe XD"}
                  />
                
              </div>

              {/* second card */}
             
              <div style={{top:'12rem' , left:'-8rem'}} >
                <Card 
                  emoji = {Developer}
                  heading = {'Devloper'}
                  detail = {"Flutter,Angular, ReactJS"}
                  />
                
              </div>

              {/* 3rd card*/}

              <div style={{top:'18rem' , left:'12rem'}} >
                <Card 
                  emoji = {UIUX}
                  heading = {'UI/UX'}
                  detail = {"Figma UI/UX Desgn,Wireframe"}
                  style
                  />
                
              </div>

         </div>
   </div>
  )
}

export default Services