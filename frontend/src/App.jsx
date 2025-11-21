import { Route, Routes } from 'react-router-dom'
import RegisterUser from './auth/RegisterUser'
import LandingPage from './component/LandingPage'

const App = () => {
  return (
    <div className='bg-zinc-800 min-h-screen w-full'>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="Home" element={<FeatureComponent />} /> */}
    </Routes>
    
    </div>
  )
}

export default App
