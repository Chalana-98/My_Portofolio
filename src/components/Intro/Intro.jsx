import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Insagram from '../../img/instagram.png'
import cvboy from '../../img/cvboy.png'
import figma from '../../img/figma.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Android from '../../img/android.png'
import Html from '../../img/html.png'
import Whatsapp from '../../img/whatsapp.png'
import {motion} from 'framer-motion'

function Intro() {

const transition = {duration : 2, type : 'spring'}
  return (
     <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi I'm </span>
                <span>Chalana Shehara</span>
                <span>Frontend Developer with high level of
                  Experience in web development , producting the
                  Quality Work</span>
               
            </div>
            <button className="btn i-button">Contact Me</button>

            <div className="i-icons">
              <img src={Github } alt="" />
              <img src={LinkedIn} alt="" />
              <img src={Whatsapp} alt="" />
            </div>
        </div>
        
        <div className="i-right">
        
              
              <motion.img 
              
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              
              src={cvboy} alt="" />
              {/* <div class="loader"></div> */}
              <motion.img 
              initial={{ left:"-36%" }}
              whileInView={{ left:"-24%" }}
              transition={transition}
              
              src={figma} alt="" />
              <motion.div 
              
              initial={{ left:"-36%" }}
              whileInView={{ left:"-24%" }}
              transition={transition}
              style={{top:'60%',left:'-3%'}}>
                <FloatingDiv image={Html} txt1='Web' txt2='Developer'/>
              </motion.div>
              <motion.div
              initial={{ right:"36%" }}
              whileInView={{ right:"-10%" }}
              transition={transition}
              
              
              style={{top:'-6%' , left:'75%'}}>
                <FloatingDiv image={Android} txt1='Mobile App' txt2='Developer'/>
              </motion.div>
              {/* blur div */}
              <div className="blur" style={{background:
              "rgb(238 210 255)"}}></div>
               <div className="blur" style={{
                background:"#C1F5FF",
                top:'17rem',
                width:'21rem',
                height:'11rem',
                left:'-9rem'}}></div>
             

        </div>
     </div>
  )
}

export default Intro