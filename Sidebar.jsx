import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function Sidebar(){
  const [open,setOpen]=useState(true)
  return (
    <motion.aside initial={false} animate={{width: open?220:72}} className='bg-habiPurple text-white min-h-screen'>
      <div className='p-4 flex items-center justify-between'>
        <img src='/logo-habi.webp' alt='logo' className='w-10 h-10' />
        <button onClick={()=>setOpen(!open)} className='text-white'>☰</button>
      </div>
      <nav className='mt-6'>
        <ul>
          <li><NavLink to='/' className={({isActive})=>`w-full block py-3 px-4 ${isActive?'bg-purple-800':''}`}>🏠 Inicio</NavLink></li>
          <li><NavLink to='/risks' className={({isActive})=>`w-full block py-3 px-4 ${isActive?'bg-purple-800':''}`}>📋 Riesgos y Controles</NavLink></li>
          <li><NavLink to='/edit' className={({isActive})=>`w-full block py-3 px-4 ${isActive?'bg-purple-800':''}`}>✏️ Edición (Líderes)</NavLink></li>
        </ul>
      </nav>
    </motion.aside>
  )
}
