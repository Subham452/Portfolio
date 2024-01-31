import React, { useState } from 'react'
import HomeTop from './HomeTop'
import logo from "../Assets/collage_1.png"
import logo1 from "../Assets/collage_3.png"
import logo2 from "../Assets/Collage_11.png"
import logo3 from "../Assets/hero_2.png"
import { motion } from 'framer-motion'
import Gallery from './Gallery'
import Header from './Header'
const Home = () => {


  const [home, setHome] = useState(false)
  const scrooling_page = () => {
    if (window.scrollY >= 0) {
      setHome(true)
    } else {
      setHome(false)
    }
  }

  window.addEventListener("scroll", scrooling_page)


  return (
    <div>
      <div className='flex-col items-center justify-center w-screen h-auto'>
        <div className='mt-10'>
          <HomeTop />
        </div>
        <div className='flex items-center justify-center w-screen h-20 mt-32'>
          <h1 className='text-4xl font-semibold lg:text-6xl'>More <span className='inline-block font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text'>+</span></h1>
        </div>
        <div className='w-10/12 h-auto text-white mx-auto overflow-hidden mt-20 flex flex-col lg:flex-row justify-between items-center bg-black rounded-3xl lg:h-[50vh]'>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            className='flex items-center justify-center h-full lg:w-6/12 bg-red-000'>
            <div className='flex flex-col items-center justify-center h-auto gap-12 p-3 lg:p-0 lg:justify-start lg:items-start lg:w-9/12 bg-green-000'>
              <h1 className='text-3xl font-semibold text-center lg:text-5xl'>Additional images</h1>
              <p className='text-slate-200'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur architecto est aspernatur mollitia impedit sed cum modi vero numquam perferendis repellendus temporibus, enim, ab consectetur facere rem voluptatem et! Illo at earum repellendus impedit ut obcaecati! Voluptate totam error consequatur quis, esse eius mollitia, nesciunt deserunt incidunt quia ducimus doloribus.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 500 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className='flex items-end justify-end w-full h-full bg-black lg:w-6/12 rounded-3xl'>
            <img src={logo} alt="" className='h-full rounded-3xl' />
          </motion.div>
        </div>

        <div className='items-center flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between w-10/12 h-auto lg:h-[70vh] mt-20 mx-auto bg-red-000'>
          <div className='flex flex-col items-center justify-around w-full h-full gap-10 p-3 text-white bg-black lg:p-0 lg:gap-0 lg:w-5/12 rounded-3xl'>
            <h1 className='text-3xl font-semibold'>Best Photo's of 2023</h1>
            <p className='text-xl'>in 2023 i travel a lot of hidden jam of my city</p>
            <img src={logo2} alt="" className='transition-all duration-300 rotate-0 hover:rotate-6 h-80' />
          </div>

          <div className='flex flex-col items-center justify-around w-full h-full gap-10 p-3 text-white bg-black lg:p-0 lg:gap-0 lg:w-5/12 rounded-3xl'>
            <h1 className='text-3xl font-semibold'>Friend for ever</h1>
            <p className='text-xl'>Some speacial time spend with friends</p>
            <img src={logo3} alt="" className='transition-all duration-300 rotate-0 hover:rotate-6 h-80' />
          </div>
        </div>
        <div className='hidden w-10/12 h-auto mx-auto mt-20 rounded-3xl'>
          <img src={logo1} alt="" className='rounded-3xl' />
        </div>
      </div>
      {/* <div className={home?"fixed top-0 left-0 z-[100] w-screen h-screen bg-black":""}></div> */}
      <div className='mt-36'>
      <Gallery />
      </div>
    </div>
  )
}

export default Home
