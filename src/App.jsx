import Navbar from './Navbar.jsx'
import Home from './pages/Home.jsx'
import MythicPlus from './pages/MythicPlus.jsx'
import CharacterPage from './pages/CharacterPage.jsx'
import './App.css'
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CharacterPage' element={<CharacterPage />} />
        <Route path='/MythicPlus' element={<MythicPlus />} />
      </Routes>
      </div>
    
    </>
    
  )
}

export default App
