import React from 'react'
import logo from "../Assets/daze_6.jpg"
import logo1 from "../Assets/daze_10.jpg"
import logo2 from "../Assets/daze_20.jpg"
import Header from './Header'
import { motion } from "framer-motion"
const HomeTop = () => {
    return (
        <div>
            <Header />
            <motion.div className='flex flex-col items-center justify-center w-screen h-screen bg-white'>
                <div className='flex flex-row items-center justify-between w-10/12 overflow-hidden bg-transparent text-whit h-5/6'>
                    <div className='flex flex-col items-start justify-start w-auto h-auto gap-7'>
                        <h1 className='text-2xl font-semibold leading-normal lg:text-4xl '>This all images are clicked by <br /> <span className='inline-block text-transparent bg-gradient-to-r from-sky-600 to-purple-900 bg-clip-text'>Subham Patnaik</span>, press connect<br /> to get Connected with Subham.</h1>
                        <ul className='flex flex-col items-start justify-start w-auto h-auto text-xl lg:text-2xl'>
                            <li><span className='inline-block text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text'>+</span> Love Traveling</li>
                            <li><span className='inline-block text-2xl text-transparent semibold text- bg-gradient-to-r from-red-600 to-sky-400 bg-clip-text'>+</span> Love Food</li>
                            <li><span className='inline-block font-semibold text-transparent text-1xl bg-gradient-to-r from-black to-indigo-700 bg-clip-text'>+</span> Friend embedded</li>
                        </ul>
                        <button className='w-auto h-auto px-10 py-2 mt-3 text-md lg:text-xl font-semibold text-white bg-black rounded-[3px]'>Get connecter</button>
                    </div>
                    <motion.div className='hidden w-3/6 h-full grid-flow-row grid-cols-3 p-5 overflow-hidden bg-white lg:grid'>
                        <motion.div 
                           initial={{opacity:0, scale:0.6}}
                           animate={{opacity:1,scale:1}}
                           transition={{
                            duration: 2,
                            delay: 1.5,
                            type: "spring",
                            bounce: 0.25,}}
                        className='bg-white overflow-hidden h-[12rem] w-[12rem] grid grid-cols-2'>

                            <div className=' bg-white h-[6rem] w-[6rem] overflow-hidden'>
                                {/* <img src="https://images.unsplash.com/photo-1587334274328-64186a80aeee?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover w-auto h-full ' alt="" /> */}
                            </div><div className=' bg-white h-[6rem] w-[6rem] overflow-hidden'>
                                {/* <img src="https://images.unsplash.com/photo-1587334274328-64186a80aeee?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover w-auto h-full ' alt="" /> */}
                            </div><div className=' bg-white h-[6rem] w-[6rem] overflow-hidden '>
                                {/* <img src="https://images.unsplash.com/photo-1587334274328-64186a80aeee?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover w-auto h-full ' alt="" /> */}
                            </div><div className=' bg-white h-[6rem] w-[6rem] overflow-hidden '>
                                <img src="https://images.unsplash.com/photo-1587334274328-64186a80aeee?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover w-auto h-full overflow-hidden ' alt="" />
                            </div>
                        </motion.div>
                        <motion.div 
                           initial={{opacity:0, scale:0.6}}
                           animate={{opacity:1,scale:1}}
                           transition={{
                            duration: 2,
                            delay: 3.6,
                            type: "spring",
                            bounce: 0.25,}}
                        
                        className='bg-pink-100 h-[12rem] w-[12rem] overflow-hidden'></motion.div>
                        <motion.div 
                           initial={{opacity:0, scale:0.6}}
                           animate={{opacity:1,scale:1}}
                           transition={{
                            duration: 2,
                            delay: 2,
                            type: "spring",
                            bounce: 0.25,}}

                           
                        className='bg-red-100 h-[12rem] w-[12rem] overflow-hidden'>
                            <img src={logo} alt='' className='object-cover w-full -mt-10' />
                        </motion.div>
                        <motion.div 
                           initial={{opacity:0, scale:0.6}}
                           animate={{opacity:1,scale:1}}
                           transition={{
                            duration: 2,
                            delay: 3.6,
                            type: "spring",
                            bounce: 0.25,}}
                        
                        className='bg-pink-100 overflow-hidden h-[12rem] grid grid-cols-2 w-[12rem]'>
                            <div className=' overflow-hidden bg-pink-200 h-[6rem] w-[6rem]'></div>
                            <div className=' overflow-hidden bg-white h-[6rem] w-[6rem] grid grid-cols-2'></div>
                            <div className=' overflow-hidden bg-white h-[6rem] w-[6rem] grid grid-cols-2'></div>
                            <div className=' overflow-hidden bg-sky-200 h-[6rem] w-[6rem] grid grid-cols-2'></div>
                        </motion.div>
                        <motion.div
                           initial={{opacity:0, scale:0.6}}
                           animate={{opacity:1,scale:1}}
                           transition={{
                            duration: 2,
                            delay: 2.2,
                            type: "spring",
                            bounce: 0.25,}}


                            className='bg-green-300 overflow-hidden h-[12rem] w-[12rem]'>
                            <img src={logo1} alt='' className='object-cover w-full h-auto -mt-14' />
                        </motion.div>
                        <motion.div 
                           initial={{opacity:0, scale:0.6}}
                           animate={{opacity:1,scale:1}}
                           transition={{
                            duration: 2,
                            delay: 3.2,
                            type: "spring",
                            bounce: 0.25,}}
                        
                        className= 'overflow-hiddenbg-sky-50 h-[12rem] w-[12rem]'></motion.div>
                        <motion.div 
                           initial={{opacity:0, scale:0.6}}
                           animate={{opacity:1,scale:1}}
                           transition={{
                            duration: 2,
                            delay: 2.9,
                            type: "spring",
                            bounce: 0.25,}}
                        
                        className='bg-pink-100 h-[12rem] grid grid-cols-2 w-[12rem]'>
                            <div className=' bg-white h-[6rem] w-[6rem]'></div>
                            <div className=' bg-red-300 h-[6rem] w-[6rem]'>
                                <img src='https://plus.unsplash.com/premium_photo-1663047314541-5b9e07f5836b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='object-cover w-full bg-red-300' />
                            </div>
                            <div className=' bg-white h-[6rem] w-[6rem] grid grid-cols-2'></div>
                            <div className=' bg-white h-[6rem] w-[6rem] grid grid-cols-2'></div>
                        </motion.div>
                        <motion.div 
                        
                        initial={{opacity:0, scale:0.6}}
                        animate={{opacity:1,scale:1}}
                        transition={{
                         duration: 2,
                         delay: 3.1,
                         type: "spring",
                         bounce: 0.25,}}
                        
                        className=' overflow-hiddenbg-pink-100 h-[12rem] grid grid-cols-2 w-[12rem]'>
                            <div className=' overflow-hidden bg-white h-[6rem] w-[6rem]'></div>
                            <div className=' overflow-hidden bg-pink-200 h-[6rem] w-[6rem] grid grid-cols-2'></div>
                            <div className='  bg-white h-[6rem] w-[6rem] overflow-hidden'>
                                <img src="https://images.unsplash.com/photo-1532456745301-b2c645d8b80d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='object-cover w-full overflow-hidden' />
                            </div>
                            <div className=' bg-white h-[6rem] w-[6rem] grid grid-cols-2'></div>
                        </motion.div>
                        <motion.div 
                           initial={{opacity:0, scale:0.6}}
                           animate={{opacity:1,scale:1}}
                           transition={{
                            duration: 2,
                            delay: 2.6,
                            type: "spring",
                            bounce: 0.25,}}
                        
                        className='bg-green-300 overflow-hidden h-[12rem] w-[12rem]'>
                            <img src={logo2} alt='' className='object-cover h-full ' />
                        </motion.div>

                </motion.div>
                <div className='hidden w-3/6 h-full overflow-hidden bg-red-600 rounded-lg shadow-md lg:hidden md:flex'>
                    <img src={logo} alt="" className='object-cover h-full ' />
                </div>
        </div>
            </motion.div >
        </div >
    )
}

export default HomeTop
