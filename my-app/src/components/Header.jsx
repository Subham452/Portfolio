import React, { useState } from 'react'
import CurrentDate from './CurrentDate'
import { Link } from 'react-router-dom';
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SlLogout } from "react-icons/sl";
import { PiFlowerTulipLight } from "react-icons/pi";
import { MdOutlineGridGoldenratio } from "react-icons/md";
import { IoGrid } from "react-icons/io5";
import { PiPlugsConnectedLight } from "react-icons/pi";
import MusixPlayer from "../components/MusixPlayer"
import { IoPlaySharp } from "react-icons/io5";
import { IoPauseOutline } from "react-icons/io5";
import { BsFillGridFill } from "react-icons/bs";
import { MdGridGoldenratio } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const arr = [
  {
    name: "Home",
    link: "/home",
    dis: "-translate-x-44",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
    dis: "-translate-x-24",
  },
  {
    name: "Gallery",
    link: "/gallery",
    dis: "translate-x-0",
  },
  {
    name: "About",
    link: "/about",
    dis: "translate-x-24",
  },
  {
    name: "Contact",
    link: "/contact",
    dis: "translate-x-44",
  }
]

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

const Header = (props) => {


  const [active, setActive] = useState(0)

  const [header, setHeader] = useState(false)

  const [click, setClick] = useState(false)

  const [menu, setMenu] = useState(false)

  const scro = () => {
    if (window.scrollY >= 0) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }
  window.addEventListener("scroll", scro)


  const [hide, setHide] = useState("hidden")

  const musicPlay = () => {
    setClick(!click)
  }
  
  // const [display, setDisplay] = useState(props.authorize)

  const navigate = useNavigate()

  const [hidee, setHidee] = useState(props.hide)

  return (
    <div className={''}>
    <div className={header ? "fixed top-0 left-0 z-10 bg-transparent" : ""}>

      <div className='absolute flex items-center justify-center w-20 h-20 bg-transparent lg:hidden'>
        <div className='w-auto h-auto px-3 py-2 font-semibold text-white rounded-full shadow-md bg-violet-700 ml-7' onClick={()=>{navigate("/")}}>Register</div>
      </div>
      
      <div className='items-center justify-between hidden w-screen px-10 bg-transparent lg:flex h-28'>
        <div className='flex-col items-start justify-center w-auto h-auto gap-10'>
          <h1 className='font-mono'>Suham Patnaik</h1>
          <div className='flex flex-row items-center justify-around w-auto h-auto px-1 py-2 text-sm text-white bg-black'>
            <CurrentDate />
          </div>
          {/* <MusixPlayer /> */}
          {/* <div className='absolute flex items-center flex-col  -rotate-90 justify-center w-auto h-auto gap-5 bg-transparent rounded-full mt-[70vh]'>
             
             <h1 className='text-2xl font-semibold text-black '>AUDIO</h1>
             <div className='flex items-center justify-center rotate-90 bg-black rounded-full w-14 h-14' onClick={musicPlay}>{click? <IoPauseOutline color='white' size={30} />: <IoPlaySharp color='white' size={30} />}</div>
          </div> */}
        </div>
        <div className='flex flex-row items-center justify-center gap-10'>
          <div className='flex items-center justify-center w-auto h-auto gap-10 px-4 py-3 font-semibold rounded-full shadow-md cursor-pointer bg-slate-50'>
            {/* <div className={`absolute ${arr[active].dis} z-20 transition-all duration-500 flex items-center justify-center w-20 text-green-400 border-2 border-[#0000008e] bg-white rounded-full h-9`}>ACTIVE</div> */}
            {
              arr.map((menu, i) => (
                <div>
                  <Link to={menu.link} key={i} onClick={() => { setActive(i) }} className='z-10'>{menu.name}</Link>
                  {/* <h1 key={i} onClick={()=>{setActive(i)}}>{menu.name}{active}</h1> */}
                </div>
              ))
            }
          </div>
            <div className='w-auto h-auto p-2 font-semibold text-white bg-black rounded-full shadow-md cursor-pointer' onClick={()=>{navigate("/")}}>Register</div>
          <div className='hidden w-32 bg-green-600 h-14' onClick={()=>{setHidee(!hidee); navigate("/register")}}>
            
          </div>
          <div className='flex flex-row items-center justify-center w-auto h-auto gap-3'>
            {
              icons.map((j, icon) => (
                <div className='flex items-center justify-center bg-black rounded-full h-9 w-9'>
                  {j.logo}
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className='flex items-center justify-end w-screen h-20 top-10 lg:hidden bg-red-000'>
        <div className='z-10 flex items-center justify-center w-10 h-10 mr-10 bg-black rounded-full shadow-md cursor-pointer' onClick={() => { setMenu(!menu) }}>
          {menu ? <MdGridGoldenratio color='white' /> : <BsFillGridFill color='white' />}
        </div>
      </div>
      <div className={`absolute flex items-center flex-row justify-end transition-all duraration-500 w-screen h-screen bg-transparent ${menu ? " right-0" : "-right-[100rem]"}`}>
        <div className='absolute left-0 w-4/12 h-full bg-black/5 -top-20 ' onClick={()=>{setMenu(false)}}>
        </div>
        <div className='absolute flex flex-col items-center justify-center w-8/12 h-full gap-10 bg-white -top-20' onClick={()=>{setMenu(false)}}>
          {
            arr.map((i) =>(
              <Link to={i.link}><h1 className='text-xl'>{i.name}</h1></Link>
            ))
          }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header
