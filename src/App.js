import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Registration from './pages/Registration'
import Auth from './pages/Auth'
import Barbers from './pages/Barbers'
import BarberDetails from './components/BarberDetails'

const App = () => {

  return (
    <div className="flex flex-col">
      <Header />
      <Routes>
        {/* <Route path='/' exact
          element={<Products />} /> */}
        <Route path='/barber/:barberId' exact element={<BarberDetails />} />
        {/* <Route path='/cart' exact element={<Cart />} /> */}
        <Route path='/barbers' exact element={<Barbers />} />
        <Route path='/auth/signup' exact element={<Registration />} />
        <Route path='/auth/signIn' exact element={<Auth />} />
      </Routes>
    </div>
  )

}

export default App
