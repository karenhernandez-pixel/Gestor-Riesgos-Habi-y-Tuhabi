import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Loader from './components/Loader'
import Home from './pages/Home'
import RisksView from './pages/RisksView'
import RisksEdit from './pages/RisksEdit'

export default function App(){
  const [loading,setLoading]=useState(true)
  const [data,setData]=useState(()=> JSON.parse(localStorage.getItem('riesgos')||'null') || [])
  const location = useLocation()

  useEffect(()=>{ const t=setTimeout(()=>setLoading(false),1800); return ()=>clearTimeout(t) },[])
  useEffect(()=> localStorage.setItem('riesgos', JSON.stringify(data)), [data])

  if(loading) return <Loader />

  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      <div className='flex-1 p-6'>
        <header className='flex items-center justify-center mb-4 relative'>
          <img src='/logo-habi.webp' alt='logo' className='w-12 h-12 absolute left-6' />
          <h1 className='text-3xl font-bold text-habiPurple'>Matriz de Riesgos Habi</h1>
        </header>
        <AnimatePresence mode='wait'>
          <motion.div key={location.pathname} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}} transition={{duration:0.35}}>
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Home data={data} />} />
              <Route path='/risks' element={<RisksView data={data} />} />
              <Route path='/edit' element={<RisksEdit data={data} setData={setData} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
