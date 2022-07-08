import React from 'react'
import "./MainRouter.css"
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Books from "./../book/books"


const MainRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/books' element={<Books/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default MainRouter