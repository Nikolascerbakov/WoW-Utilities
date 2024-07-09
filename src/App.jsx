import Navbar from './Navbar.jsx'
import Home from './pages/Home.jsx'
import MythicPlus from './pages/MythicPlus.jsx'
import CharacterPage from './pages/CharacterPage.jsx'
import Raid from './pages/Raid.jsx'
import Checklist from './pages/Checklist.jsx'
import './App.css'
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/CharacterPage' element={<CharacterPage />} />
        <Route path='/MythicPlus' element={<MythicPlus />} />
        <Route path='/Raid' element={<Raid />} />
        <Route path='/Checklist' element={<Checklist />} />
      </Routes>
      </div>
    
    </>
    
  )
}

export default App
