import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/about'>About</Link>
      </ul>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </>
  )
}

export default App
