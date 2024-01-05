import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import ShoppingMartAuthenticator from './Authentication/ShoppingMartAuthenticator'

function App() {

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<ShoppingMartAuthenticator />}  />
        <Route path='/home' element={<Home/>}  />
        <Route path='/cart' element={<Cart/>}  />
      </Routes>

    </div>
  )
}

export default App
