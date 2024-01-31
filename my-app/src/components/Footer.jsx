import React from 'react'
import { Link } from 'react-router-dom';
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { PiPlugsConnectedBold } from "react-icons/pi";

import { motion } from "framer-motion"
const icons = [
    {
        logo: <RiFacebookCircleFill size={15} color='white' />,
        logo_name: "Facebook",
    },
    {
        logo: <FaInstagram size={15} color='white' />,
        logo_name: "Instagram",
    },
    {
        logo: <FaXTwitter size={15} color='white' />,
        logo_name: "Twitter",
    },
]
const Footer = () => {
    return (
        <div className='bg-red-50'>
            <div className='flex flex-col items-center justify-around w-screen h-auto gap-10 mt-20 font-mono border-2 border-dashed lg:gap-0 bg-red-50 lg:h-96'>
                <motion.h1
                    initial={{ y: -200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className='text-4xl text-center'>I'm Developer</motion.h1>
                <p className='flex flex-col items-center justify-center w-10/12 h-auto gap-16 text-lg'>
                    <motion.h1
                        initial={{ y: 200, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, type: "spring" }}
                        className='font-sans'
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem itaque pariatur voluptates beatae mollitia, iusto inventore illo non hic repellendus veritatis reprehenderit vero! Impedit totam excepturi unde aut vitae, accusamus quod, explicabo nisi, consectetur qui eaque rem corporis nihil esse. Amet omnis hic reiciendis sed?</motion.h1>
                    <div className='flex flex-col items-center justify-between w-full h-20 lg:flex-row bg-red-50 bg-green-000'>
                        <div className='flex flex-col items-start justify-start w-full h-full lg:w-4/12 bg-red-000'>
                            {/* contact */}
                            <h1>Contact us</h1>
                            <div className='flex flex-row w-full h-auto bg-red-000 lg:w-full'>
                                <input type="email" placeholder='Email Address' className='h-12 text-green-400 bg-transparent border-b-2 border-green-400 outline-none lg:w-10/12' />
                                <div className='flex items-center justify-center w-auto h-auto p-4 bg-black rounded-full'><PiPlugsConnectedBold color='white' size={20} /></div>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-end w-4/12 h-full gap-5 bg-red-50 '>
                            {
                                icons.map((i) => (
                                    <div className='flex items-center justify-center w-10 h-10 bg-black rounded-full shadow-md'>
                                        {i.logo}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </p>

            </div>
        </div>
    )
}

export default Footer
