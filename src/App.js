import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Registration from './pages/Registration'
import Auth from './pages/Auth'
import Barbers from './pages/Barbers'
import BarberDetails from './components/BarberDetails'

// **სავალდებულო
// გადააკეთეთ კლას კომპონენტები თანამედროვე ფუნქციურ კომპონენტებად.

// **დამატებითი
// შეძლებისდაგვარად გასტილეთ უკეთესად
// დაუმატეთ cartიდან წაშლის ფუნქციონალი
// დაუმატეთ ფუნქციონალი რომ ერთიდაიგივე აითემი, მრავალჯერ არ განმეორდეს,
// უბრალოდ იყოს რაოდენობა. მაგ: თუ ვიყიდი 3 ქურთუკს, უნდა მიჩანდეს რომ ვიყიდე 3 ცალი
// და არ გამომიჩნდეს 3ჯერ
// ასევე კარგი იქნება დაამატოთ, რაოდენობი გაზრდა-დაპატარავების ფუნქციონალი
const App = () => {

  return (
    <div className="flex flex-col">
      <Header />
      <Routes>
        <Route path='/' exact
          element={<Products />} />
        <Route path='/barber/:barberId' exact element={<BarberDetails />} />
        <Route path='/cart' exact element={<Cart />} />
        <Route path='/barbers' exact element={<Barbers />} />
        <Route path='/auth/signup' exact element={<Registration />} />
        <Route path='/auth/signIn' exact element={<Auth />} />
      </Routes>
    </div>
  )

}

export default App
