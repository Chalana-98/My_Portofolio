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

import {motion} from 'framer-motion'

function Services() {
const transition = {duration : 1, type:'spring'}

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

                <motion.div 
                initial={{ rotate:45 }}
                whileInView={{ rotate:0 }}
                viewport={{ margin:'-40px' }}
                transition={{ duration:3.5 , type:'spring'}}
                
                
                className="w-mainCircle">

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
                  
                  
                  

                </motion.div>
                </div>
<div className="blur s-blur" style={{background:
              "rgb(238 210 255)"}}></div>
            

         </div>
    
         {/* right side */}

         <div className="cards"  >
              <motion.div
              whileInView={{ left:'16rem' }}
              initial={{ left:'2rem' }}
              transition={transition}
              
              style={{left:'1rem',    width: '100px;'}} >
                <Card 
                  emoji = {Designer}
                  heading = {'Design'}
                  detail = {"Figma, sektch , photoshop, Adobe XD"}
                  />
                
              </motion.div>
              

              {/* second card */}
             
              <motion.div
              whileInView={{ left:'1rem' }}
              initial={{ left:'-20rem' }}
              transition={transition}
              
              
              style={{top:'12rem' , left:'-1rem'}} >
                <Card 
                  emoji = {Developer}
                  heading = {'Devloper'}
                  detail = {"Flutter,Angular, ReactJS"}
                  />
                
              </motion.div>

              {/* 3rd card*/}

              <motion.div 
              whileInView={{ left:'17rem' }}
              initial={{ left:'20rem' }}
              transition={transition}
              
              
              style={{top:'18rem' , left:'1rem', }} >
                <Card 
                  emoji = {UIUX}
                  heading = {'UI/UX'}
                  detail = {"Figma UI/UX Desgn,Wireframe"}
                  style
                  />
                
              </motion.div>

         </div>
   </div>
  )
}

export default Services