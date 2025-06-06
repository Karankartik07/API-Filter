import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Shop from './Component/Shop'


export default function App() {
  const [pass, setPass] = useState("")
  function passData(data) {
    setPass(data)
  }
  return (
    <BrowserRouter>
      <Navbar passData={passData} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop dataShop={pass} />} />

      </Routes>
    </BrowserRouter>
  )
}
