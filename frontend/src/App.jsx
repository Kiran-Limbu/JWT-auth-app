import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterUser from './auth/RegisterUser'

const App = () => {
  return (
    <div className='bg-zinc-800 min-h-screen w-full'>
    <Routes>
      <Route path="/" element={<RegisterUser />} />
      {/* <Route path="Home" element={<FeatureComponent />} /> */}
    </Routes>
    
    </div>
  )
}

export default App
