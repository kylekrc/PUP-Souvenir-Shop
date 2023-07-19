import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Product from './product'

const Rout = ({close, setClose}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home close={close} setClose={setClose}/>}/>
        <Route path='/product' element={<Product close={close} setClose={setClose} />}/>
    </Routes>
    </>
  )
}

export default Rout