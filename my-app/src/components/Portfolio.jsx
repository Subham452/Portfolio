import React from 'react'
import {motion} from "framer-motion"
import Header from './Header'
import Footer from './Footer'
const Portfolio = () => {
  return (
    <div>
      <Header />
      <div className='flex items-center justify-center w-screen h-auto bg-white lg:h-screen mt-28 lg:mt-0'>
        <div className='flex flex-col justify-between w-10/12 h-auto gap-20 mx-auto bg-red-000 lg:gap-0 lg:h-full lg:flex-row '>
          <div className='flex flex-col items-start justify-center w-auto h-auto gap-10 bg-green-000 lg:w-5/12'>
            <h1 className='text-6xl'>Portfolio</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolorum vel quibusdam commodi voluptatum facere delectus deserunt corporis nostrum amet, placeat nisi explicabo ad dicta! Fugiat tenetur dignissimos dolorum in eveniet quaerat rerum ut tempora nobis harum odio et voluptatibus iure accusamus perferendis exercitationem impedit sequi natus aperiam, libero a!</p>
          </div>
          <div className='flex items-center justify-center w-auto mx-auto bg-white lg:w-7/12'>
            <div className='grid w-auto h-auto gap-2 grid-cols-2 lg:h-[21rem] lg:gap-2 lg:grid-cols-2 bg-red-50'>
              <motion.div 
                initial={{opacity:0, scale:0.5}}
                whileInView={{opacity:1, scale:1}}
                transition={{duration:2, delay:0.5,
                  type: "spring",
                  bounce: 0.4,}}
              
              className='h-[10rem] w-[18rem] overflow-hidden bg bg-red-700'>
                <img src="https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover w-full transition-all duration-300 hover:scale-105' alt="" />
              {/* https://images.unsplash.com/photo-1706108439810-f887f16a22bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
              </motion.div>
              <motion.div 
                initial={{opacity:0, scale:0.5}}
                whileInView={{opacity:1, scale:1}}
                transition={{duration:2, delay:0.5,
                  type: "spring",
                  bounce: 0.4,}}
              
              className='h-[10rem] w-[18rem] overflow-hidden bg bg-red-700'>
                <img src="https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover w-full transition-all duration-300 hover:scale-105' alt="" />
              {/* https://images.unsplash.com/photo-1706108439810-f887f16a22bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
              </motion.div>
              <motion.div 
                initial={{opacity:0, scale:0.5}}
                whileInView={{opacity:1, scale:1}}
                transition={{duration:2, delay:0.5, 
                  type: "spring",
                  bounce: 0.4,}}
                
                className='h-[10rem] w-[18rem] overflow-hidden bg bg-red-700'>
                <img src="https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover w-full transition-all duration-300 hover:scale-105' alt="" />
              {/* https://images.unsplash.com/photo-1706108439810-f887f16a22bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
              </motion.div>
              <motion.div 
                initial={{opacity:0, scale:0.5}}
                whileInView={{opacity:1, scale:1}}
                transition={{duration:2, delay:0.5,
                  type: "spring",
                  bounce: 0.4,}}
              
              className='h-[10rem] w-[18rem] overflow-hidden bg bg-red-700'>
                <img src="https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover w-full transition-all duration-300 hover:scale-105' alt="" />
              {/* https://images.unsplash.com/photo-1706108439810-f887f16a22bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
