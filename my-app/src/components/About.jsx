import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import logo from "../Assets/daze_7.jpg"
import {motion} from "framer-motion"
import Footer from './Footer'
const About = () => {
  return (
    <div>
      <Header />
      <div className='flex items-center justify-center w-screen h-auto bg-black lg:h-screen mt-28'>
        <div className='flex flex-col items-center justify-between w-10/12 h-full lg:flex-row bg-black/0'>
          <motion.div
            initial={{x:-200, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, delay:0.5}}
          className='w-auto h-full lg:w-5/12'>
            <img src={logo} alt="" className='h-full' />
          </motion.div>
          <motion.div 
             initial={{y:100, opacity:0}}
             whileInView={{y:0, opacity:1}}
             transition={{duration:2, delay:0.5}}
          className='flex flex-col items-start justify-center w-full h-auto gap-5 mt-10 mb-20 text-white lg:mt-0 bg-red-000 lg:h-full lg:mb-auto lg:mt:0 lg:w-6/12'>
            <h1 className='text-xl'>About Subham,</h1>
            <p className='font-sans text-xl leading-normal drop-shadow-2xl'>Hii My self Subham Patnaik i'm a Computer science student. In few month ago i started to learn web development with html, css and javaScript, after completing that i started to learn React js and Next js . With the help of React and Next js i made numerious webApp this is my 39th project. In this portfolio project i used my all of present knlowledeg that was i learn in my webDev journey </p>
            <button className='w-full h-auto px-2 py-3 mt-10 rounded-[2px] font-semibold text-black text-lg bg-white shadow-md'>Learn more about me</button>
          </motion.div>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default About
