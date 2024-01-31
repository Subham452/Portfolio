// 'use client'
// import React, { useState, useEffect } from 'react'
// import { motion } from "framer-motion"

// import Image from 'next/image'

// import Link from 'next/link'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import ReactLiveTime from "../components/ReactLiveTime"
// import BackgroundMusic from '../components/BackgroundMusic'
// const page = () => {


//     const arr = [
//         {
//             image: "https://images.unsplash.com/photo-1587271644048-2fbb187de8d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//         {
//             image: "https://images.unsplash.com/photo-1553452118-621e1f860f43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//         {
//             image: "https://images.unsplash.com/photo-1705935396117-f8ee2d974802?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//         {
//             image: "https://images.unsplash.com/photo-1705866649609-9ea7159fe1ea?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//         {
//             image: "https://images.unsplash.com/photo-1557777586-f6682739fcf3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//         {
//             image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//     ]



//     const [active, setActive] = useState(0)




//     const more = [
//         {
//             text: "Mine",
//             dis: "-translate-x-36",
//             hide: "flex",
//         },
//         {
//             text: "Friend's",
//             dis: "-translate-x-12",
//             hide: "flex",
//         },
//         {
//             text: "food",
//             dis: "translate-x-12",
//             hide: "flex",
//         },
//         {
//             text: "Places",
//             dis: "translate-x-36",
//             hide: "flex",
//         }
//     ]



//     const images = [
//         {
//             image: "/daze_1.jpg"
//         },
//         {
//             image: "/daze_2.jpg"
//         },
//         {
//             image: "/daze_3.jpg"
//         },
//         {
//             image: "/daze_4.png"
//         },
//         {
//             image: "/daze_5.jpg"
//         },
//         {
//             image: "/daze_6.jpg"
//         },
//         {
//             image: "/daze_8.jpg"
//         },
//         {
//             image: "/daze_9.jpg"
//         },
//         {
//             image: "/daze_10.jpg"
//         },
//         {
//             image: "/daze_12.jpg"
//         },
//         {
//             image: "/daze_15.jpg"
//         },
//         {
//             image: "/daze_17.jpg"
//         },
//         {
//             image: "/daze_19.jpg"
//         },
//         {
//             image: "/daze_20.jpg"
//         },
//         {
//             image: "/daze_21.jpg"
//         },
//         {
//             image: "/daze_22.jpg"
//         },
//         {
//             image: "/daze_23.jpg"
//         },
//         {
//             image: "/daze_25.jpg"
//         },
//         {
//             image: "/daze_26.jpg"
//         },
//         {
//             image: "/daze_1.jpg"
//         },
//         {
//             image: "/daze_1.jpg"
//         },
//         {
//             image: "/daze_1.jpg"
//         },
//         {
//             image: "/daze_1.jpg"
//         },
//         {
//             image: "/daze_1.jpg"
//         },
//         {
//             image: "/daze_1.jpg"
//         },
//         {
//             image: "/daze_1.jpg"
//         },
//         {
//             image: "/daze_1.jpg"
//         },
//         {
//             image: "/daze_1.jpg"
//         },
//     ]

//     // const value = [
//     //     {
//     //         name: "Subham love\'s food",
//     //         src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     //     },
//     //     {
//     //         name: "Subahm love\'s traveling",
//     //         src="https://images.unsplash.com/photo-1573708453892-1dfe7bf640a7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     //     },
//     //     {
//     //         name: "Subham with friend\'s",
//     //         src:"https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     //     },
//     //     {
//     //         name: "Best Photo\'s of 2023",
//     //         src="https://images.unsplash.com/photo-1573708453892-1dfe7bf640a7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     //     }
//     // ]


//     // const [music, setMusic] = useState(false)

//     // const ScrollHeader = () => {
//     //     if(window.scrollY >= 0){
//     //         // setHeader(true)
//     //         setMusic(true)
//     //     }
//     //     else{
//     //         // setHeader(false)
//     //         setMusic(false)
//     //     }
//     // }


//     // useEffect(()=>{
//     //     window.addEventListener('scroll', ScrollHeader)
//     // },[])

//     return (
//         <div className="flex flex-col items-center justify-center w-screen h-auto overflow-hidden">
//             <Header />
//       <div className="absolute flex items-center justify-center w-auto h-auto px-2 py-1 font-mono text-white bg-black lg:top-28 top-20 right-8 lg:px-3 lg:py-3">
//         <ReactLiveTime />
//       </div>

//       <div className="absolute top-36 left-8">
//         <BackgroundMusic />
//       </div>

//             {/* <div className="grid w-10/12 h-auto grid-flow-row grid-cols-2 gap-20">
//                 {
//                     value.map((i) => (
//                         <div className="flex flex-col items-center justify-center overflow-hidden bg-black rounded-lg h-96 w-72">
//                             <motion.div
//                                 initial={{ x: 0 }}
//                                 animate={{ x: 100 }}

//                                 key={i}
//                                 className="absolute z-40 flex items-center justify-center h-24 overflow-hidden text-2xl font-semibold text-black rounded-lg font-primary w-72 bg-slate-200/60 "
//                             >
//                                 Subham love's Food
//                             </motion.div>
//                             <Image src={"https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="transition-all duration-500 hover:scale-110" height={300} width={300}/>
//                         </div>
//                     ))
//                 }
//             </div> */}
//             <h1 className="mt-20 text-5xl text-center text-black lg:mt-auto">Gallery</h1>
//             <div className="items-center justify-center hidden w-screen h-screen overflow-hidden lg:flex lgflex-row bg-red-000 px-36">
//                 <div className="flex flex-col items-center justify-center w-full h-full gap-6 lg:items-start lg:w-6/12 lg:h-5/6 bg-sky-000">
//                     <h1 className="hidden font-sans text-xl font-semibold leading-normal lg:inline lg:text-4xl">This all images are clicked by<br /> Subham Patnaik Press connect <br />to get connect with Subham.</h1>
//                     <h1 className="font-sans text-xl font-semibold leading-normal lg:hidden lg:text-4xl">This all images are clicked by Subham Patnak Press connect to get connectd with Subham.</h1>
//                     <ul className="flex flex-col items-start justify-start w-full bg-red-000">
//                         <li className="text-xl"><span className="inline-block text-3xl text-transparent bg-gradient-to-r from-red-600 via-purple-700 to-sky-500 bg-clip-text">+</span> Love Traveling</li>
//                         <li className="text-xl"><span className="inline-block text-3xl text-transparent bg-gradient-to-r from-red-600 via-purple-700 to-sky-500 bg-clip-text">+</span> Love Food</li>
//                         <li className="text-xl"><span className="inline-block text-3xl text-transparent bg-gradient-to-r from-red-600 via-purple-700 to-sky-500 bg-clip-text">+</span> Friend embedded</li>
//                     </ul>
//                     <button className="flex items-center justify-center w-auto h-auto px-20 py-3 font-semibold text-white bg-black rounded-sm shadow-md"><Link href="www.linkedin.com/in/subham-patnaik-85490a252" target="_blank">Get Connected</Link></button>
//                 </div>
//                 <div className="hidden w-6/12 grid-flow-row grid-cols-3 p-6 lg:grid h-5/6 bg-green-000">
//                     <div className="grid w-48 h-48 grid-flow-row grid-cols-2 bg-red-000">
//                         <div className="h-[5.5rem] w-[5.5rem] bg-white"></div>
//                         <div className="h-[5.5rem] w-[5.5rem] bg-white"></div>
//                         <div className="h-[5.5rem] w-[5.5rem] bg-white"></div>
//                         <div className="h-[6rem] w-[6rem] bg-black"><Image src={"https://images.unsplash.com/photo-1587334274328-64186a80aeee?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height={100} width={100} /></div>
//                     </div>
//                     <div className="w-48 h-48 bg-blue-200 "></div>
//                     <div className="w-48 h-48 bg-green-200 "><Image src="/daze_6.jpg" height="300" width="300" className="object-cover h-full" /></div>
//                     <div className="grid w-48 h-48 grid-flow-row grid-cols-2 bg-white ">
//                         <div className="h-[6rem] w-[6rem] bg-pink-100"></div>
//                         <div className="h-[6rem] w-[6rem] bg-white"></div>
//                         <div className="h-[6rem] w-[6rem] bg-white"></div>
//                         <div className="h-[6rem] w-[6rem] bg-sky-100"></div>
//                     </div>
//                     <div className="w-48 h-48 bg-blue-200 "><Image src="/daze_20.jpg" height="500" width="300" className="object-cover h-full" /></div>
//                     <div className="w-48 h-48 bg-red-100 "></div>
//                     <div className="grid w-48 h-48 grid-flow-row grid-cols-2 bg-orange-200 ">
//                         <div className="h-[6rem] w-[6rem] bg-white"></div>
//                         <div className="h-[6rem] w-[6rem] bg-white"><Image src={"https://images.unsplash.com/photo-1629121003845-e96bfccd1026?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height={100} width={100} className="h-full" /></div>
//                         <div className="h-[6rem] w-[6rem] bg-white"></div>
//                         <div className="h-[6rem] w-[6rem] bg-white"></div>

//                     </div>
//                     <div className="grid w-48 h-48 grid-flow-row grid-cols-2 bg-slate-200">
//                         <div className="h-[6rem] w-[6rem] bg-white"></div>
//                         <div className="h-[6rem] w-[6rem] bg-pink-100"></div>
//                         <div className="h-[6rem] w-[6rem] bg-blue-100" className="overflow-hidden"><Image src={"https://images.unsplash.com/photo-1633907284646-7abf4a195875?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height={100} width={100} /></div>
//                         <div className="h-[6rem] w-[6rem] bg-white"></div>
//                     </div>
//                     <div className="w-48 h-48 overflow-hidden bg-pink-200 "><Image src="/daze_12.jpg" height="500" width="300" className="object-cover h-full" /></div>
//                 </div>
//             </div>

//             <div className="flex mt-20 flex-col items-center justify-around w-screen h-[50vh] bg-red0-000 lg:hidden">
//                 <div className="flex flex-col items-start justify-around w-full h-full pl-4">
//                     <h1 className="font-sans text-2xl leading-normal">This all images are clicked by <br /> Subham Patnak Press connect to get<br /> connect with Subham.</h1>
//                     <ul className="flex flex-col items-start justify-start w-full gap-3 bg-red-000">
//                         <li className="text-xl"><span className="inline-block text-3xl text-transparent bg-gradient-to-r from-red-600 via-purple-700 to-sky-500 bg-clip-text">+</span> Love Traveling</li>
//                         <li className="text-xl"><span className="inline-block text-3xl text-transparent bg-gradient-to-r from-red-600 via-purple-700 to-sky-500 bg-clip-text">+</span> Love Food</li>
//                         <li className="text-xl"><span className="inline-block text-3xl text-transparent bg-gradient-to-r from-red-600 via-purple-700 to-sky-500 bg-clip-text">+</span> Friend embedded</li>
//                     </ul>
//                     <button className="flex items-center justify-center w-auto h-auto px-3 py-2 font-semibold text-white bg-black rounded-sm shadow-md"><Link href="www.linkedin.com/in/subham-patnaik-85490a252" target="_blank">Get Connected</Link></button>
//                 </div>
//             </div>

//             <div className="flex items-center justify-center w-screen h-32 mt-20 overflow-hidden lg:mt-0 bg-sky-000">
//                 <h1 className="flex items-center justify-center text-6xl font-semibold text-black bg-pink-000">More <div className="flex items-center justify-center w-auto h-auto bg-sky-000"><span className="inline-block h-full text-5xl text-transparent bg-gradient-to-r from-sky-600 to-purple-700 bg-clip-text">+</span></div> </h1>
//             </div>

//             <div className="flex flex-col items-center justify-between w-10/12 mt-20 overflow-hidden text-white bg-black lg:flex-row h-96 mx-36 rounded-xl">
//                 <div className="flex flex-col items-center justify-center w-auto h-full bg-sky-000 lg:w-6/12 ">
//                     <div className="flex flex-col justify-center w-10/12 h-auto lg:justify-start bg-red-000 gap-7">
//                         <h1 className="p-0 text-3xl font-semibold bg-red-000 lg:p-0 lg:text-3xl">Additional images</h1>
//                         <p className="h-auto text-xllg:w-10/12 text-slate-200">Lorem ipsum dolor aut adipisci, pariatur aliquid consectetur porro minus.</p>
//                     </div>
//                 </div>
//                 <div className="flex items-end justify-end w-6/12 h-full overflow-hidden bg-black">
//                     <Image src="/why_grid_a.png" height={500} width={500} className="object-cover lg:h-auto" />
//                 </div>
//             </div>

//             <div className="flex flex-col items-center justify-between w-screen h-auto gap-20 mt-20 overflow-hidden text-white bg-white lg:h-screen lg:flex-row px-36 rounded-xl">
//                 <div className="flex flex-col items-center justify-around h-auto gap-10 p-5 bg-black rounded-lg w-[80vw] lg:w-5/12 lg:h-5/6 lg:p-0">
//                     <h1 className="text-2xl font-semibold">Best Photo's of 2023</h1>
//                     <h1 className="text-xl">in 2023 i travel a lot of hidden jam of my city</h1>
//                     <div>
//                         <Image src={"/hero_1.png"} height={500} width={500} />
//                     </div>
//                 </div>
//                 <div className="flex flex-col items-center justify-around h-auto gap-10 p-5 bg-black rounded-lg w-[80vw] lg:w-5/12 lg:h-5/6 lg:p-0">
//                     <h1 className="text-2xl font-semibold">Friend for ever</h1>
//                     <h1 className="text-xl">Some speacial time spend with friends</h1>
//                     <div>
//                         <Image src={"/hero_2.png"} height={500} width={500} />
//                     </div>
//                 </div>
//             </div>

//             <div className="flex flex-col items-center justify-center w-screen h-32 mt-48 overflow-hidden bg-sky-000">
//                 <h1 className="flex items-center justify-center text-4xl font-semibold text-black lg:text-6xl bg-pink-000">More with Subham<div className="flex items-center justify-center w-auto h-auto bg-sky-000"><span className="inline-block h-full text-5xl text-transparent bg-gradient-to-r from-sky-600 to-purple-700 bg-clip-text">+</span></div> </h1>
//                 <h1 className="text-2xl text-black">Get Access Some Photo's of Mine.</h1>
//             </div>
//             <div className="flex items-center justify-center w-screen h-16 mt-6 mb-40 bg-red-000">
//                 <div className="flex items-center justify-center w-auto h-auto gap-8 px-4 py-1 shadow-xl bg-slate-100 rounded-3xl">
//                     <div className={`absolute z-10 transition-all duration-300 ${more[active].dis} w-20 h-8 bg-white shadow-md rounded-3xl flex justify-center items-center text-green-600`}>ACTIVE</div>
//                     {
//                         more.map((menu, i) => (
//                             // <h1 className="font-semibold cursor-pointer text-md " onClick={()=>{setActive(i)}}>{i.text}{active}</h1>
//                             <div key={i} className="flex items-center justify-center w-auto h-auto px-2 py-1 font-semibold rounded-full cursor-pointer " onClick={() => { setActive(i) }}>
//                                 {/* {active} */}
//                                 <h1 className={`${active === i ? "translate-y-10 z-30 opacity-0 transition-all duration-300" : "translate-y-0 z-30 opacity-100 transition-all duration-300"}`}>{menu.text}</h1>
//                             </div>

//                         ))
//                     }
//                 </div>
//             </div>
//             <div className="justify-center hidden w-screen h-auto overflow-hidden transition-all duration-300 bg-white it:ems-center lg:flex">
//                 <motion.div className={`w-auto h-auto grid-flow-row grid-cols-4 gap-14 gap-y-28 ${active === 0 ? "bg-white grid" : "bg-pink-400 hidden"}`}
//                     initial={{ y: 200 }}
//                     whileInView={{ y: 0 }}
//                     transition={{ duration: 2, type: "spring", bounce: 0.4 }}
//                 >
//                     {
//                         images.map((i) => (
//                             <div className="flex items-center justify-center bg-white w-72 h-72">
//                                 <Image src={i.image} height={300} width={300} className="rounded-lg " />
//                             </div>
//                         ))
//                     }
//                 </motion.div>

//                 <div className={`w-5/6 h-96 ${active === 1 ? "bg-sky-400 grid" : " hidden"}`}>

//                 </div>

//                 <div className={`w-5/6 h-96 ${active === 2 ? "bg-green-400 items-center flex justify-center " : " hidden"}`}>


//                     <BackgroundMusic />
//                 </div>

//                 <div className={`w-5/6 h-96 ${active === 3 ? "bg-orange-400 grid" : "hidden"}`}>

//                 </div>
//             </div>

//             <div className="flex flex-col items-center justify-center w-screen h-auto">
//                 <div className={`${active === 0 ? "flex" : "hidden"} flex-row bg-red-000 rounded-lg lg:hidden h-[55vh] w-screen justify-center items-center`}>
//                     <motion.div className="h-[55vh] p-2 w-6/12 flex-col flex justify-between items-center  bg-green-000"

//                         initial={{ y: 100 }}
//                         whileInView={{ y: -30 }}
//                         transition={{
//                             duration: 1,
//                         }}

//                     >
//                         <Image src="/daze_3.jpg" height={100} width={200} className="object-cover h-32 rounded-2xl" />
//                         <Image src="/daze_10.jpg" height={300} width={200} className="object-cover rounded-2xl " />
//                     </motion.div>
//                     <motion.div className="h-[55vh] p-2 w-6/12 flex-col flex justify-between items-center  bg-green-000"

//                         initial={{ y: 100 }}
//                         whileInView={{ y: -30 }}
//                         transition={{
//                             duration: 1,
//                             delay: 0.3,
//                         }}

//                     >
//                         <Image src="/daze_1.jpg" height={100} width={200} className="object-cover rounded-2xl" />
//                         <Image src="/daze_9.jpg" height={300} width={200} className="object-cover h-44 rounded-2xl " />
//                     </motion.div>
//                 </div>

//                 <div className={`w-5/6 h-96 ${active === 1 ? "bg-sky-400 grid" : " hidden"}`}>

//                 </div>

//                 <div className={`w-5/6 h-96 ${active === 2 ? "bg-green-400 grid" : " hidden"}`}>

//                 </div>

//                 <div className={`w-5/6 h-96 ${active === 3 ? "bg-orange-400 grid" : "hidden"}`}>

//                 </div>
//             </div>
//             <Footer />


//         </div>
//     )
// }

// export default page






import React, { useState } from 'react'
import Header from './Header'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'

import logo from "../Assets/daze_1.jpg"
import logo1 from "../Assets/daze_2.jpg"
import logo2 from "../Assets/daze_12.jpg"
import logo3 from "../Assets/daze_4.png"
import logo4 from "../Assets/daze_13.jpg"
import logo5 from "../Assets/daze_6.jpg"
import logo6 from "../Assets/daze_7.jpg"
import logo7 from "../Assets/daze_8.jpg"
import logo8 from "../Assets/daze_9.jpg"
import logo9 from "../Assets/daze_10.jpg"
import logo10 from "../Assets/daze_11.jpg"

import logo101 from "../Assets/my_doc_27.jpg"
import logo102 from "../Assets/my_doc_15.jpg"
import logo103 from "../Assets/my_doc_23.jpg"
import logo104 from "../Assets/nice_day.jpg"
import logo105 from "../Assets/my_doc_40.jpg"
import logo106 from "../Assets/my_doc_21.jpg"
import logo107 from "../Assets/my_doc_39.jpg"
import logo108 from "../Assets/my_doc_36.jpg"
import logo109 from "../Assets/my_doc_38.jpg"
import logo110 from "../Assets/my_doc_35.jpg"
import logo111 from "../Assets/my_doc_5.jpg"
import logo112 from "../Assets/my_doc_6.jpg"
import Footer from './Footer'


const arr1 = [
  {
    name: "Mine",
    dis1: "-translate-x-32",
    bgColor: "red",
  },
  {
    name: "Friend",
    dis1: "-translate-x-10",
    bgColor: "green",
  },
  {
    name: "Places",
    dis1: "translate-x-12",
    bgColor: "red",
  },
  {
    name: "Food",
    dis1: "translate-x-32",
    bgColor: "red",
  }
]


const images = [
  {
    img:logo,
  },
  
  {
    img:logo1,
  }
  ,
  {
    img:logo2,
  },
  
  {
    img:logo3,
  },
  
  {
    img:logo4,
  },
  
  {
    img:logo5,
  },
  
  {
    img:logo6,
  },
  {
    img:logo7,
  },
  {
    img:logo8,
  },
  {
    img:logo9,
  },
]


const images1 = [
  {
    img:logo101,
  },
  
  {
    img:logo102,
  }
  ,
  {
    img:logo103,
  },
  
  {
    img:logo104,
  },
  
  {
    img:logo105,
  },
  
  {
    img:logo106,
  },
  
  {
    img:logo107,
  },
  {
    img:logo108,
  },
  {
    img:logo109,
  },
  {
    img:logo110,
  },
]



const Gallery = () => {

  const navigate = useNavigate()

  const [keyVal, setKeyVal] = useState(0)

  const [hidden, setHidden] = useState()

  return (
    <div className='flex flex-col w-screen h-auto gap-0 overflow-hidden'>
      <div className='absolute flex items-center justify-center w-20 h-auto py-2 mt-3 ml-3 text-white bg-black rounded-full cursor-pointer lg:ml-10 lg:mt-10' onClick={()=>{navigate("/home")}}>
        Back
      </div>
      <div className='flex items-center justify-center w-screen h-[40vh] gap-20 p-10 bg-red-000'>
        <div className='flex flex-col items-center justify-center w-screen h-20 gap-3'>
          <h1 className='text-4xl font-semibold lg:text-5xl'>More with Subham <span className='inline-block font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text'>+</span></h1>
          <p className='text-2xl'>Get Access Some Photo's of Mine.</p>
          <div className='flex flex-row items-center justify-center w-[20rem] h-20 gap-10 px-8 py-2 mt-10 transition-all duration-500 rounded-full shadow-md bg-slate-100'>
            <div className={`h-10 w-20 transition-all duration-500  ${arr1[keyVal]?.dis1} cursor-pointer bg-[#000] absolute rounded-full`}></div>
            {
              arr1.map((i, value) => (
                <h1 key={value} className='font-semibold text-black cursor-pointer' onClick={() => { setKeyVal(value) }}>{i.name}</h1>
              ))
            }
          </div>
        </div>
      </div>

      <div className='w-screen h-auto bg-red-000'>
        <div className={`w-10/12 mx-auto h-auto flex justify-center items-center bg-sky-000 ${keyVal===0?"":"hidden"}`}>
          <div className='grid items-center w-auto h-auto grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
            {
              images.map((i) => (
                <div className='h-[20rem] rounded-lg w-[15rem] overflow-hidden'>
                  <img src={i.img} alt='' className='h-[20rem]  transition-all duration-500 hover:scale-110 w-[15rem] object-cover' />
                  </div>
              ))
            }
          </div>
        </div>
        
        <div className={`w-10/12 mx-auto bg-green-000 h-96 ${keyVal===1?"":"hidden"}`}>
        <motion.div 
          initial={{y:200}}
          whileInView={{y:0}}
          transition={{duration:2, delay:2, type:"spring"}}
        className='grid w-auto h-auto grid-cols-5 gap-4'>
            {
              images1.map((i) => (
                <div className='h-[20rem] rounded-lg w-[15rem] overflow-hidden'>
                  <img src={i.img} alt='' className='h-[20rem] transition-all duration-500 hover:scale-110 w-[15rem] object-cover' />
                  </div>
              ))
            }
          </motion.div>
        </div>
        
        <div className={`w-10/12 mx-auto bg-red-500 h-96 ${keyVal===2?"":"hidden"}`}>
          
        </div>
        
        <div className={`w-10/12 mx-auto bg-orange-500 h-96 ${keyVal===3?"":"hidden"}`}>
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery
