import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Movies from './pages/movies/movies'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Home from './pages/home/home'
import Navbar from './component/navbar'
import Signup from './pages/signup/signup'
import MoviesDetails from './pages/moviesDetails/moviesDetails'

function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/movies' element={<Movies />} />
         <Route path='/about' element={<About />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/signup' element={<Signup />} />
          {/* Dynamic         */}
         <Route path='/movies/:id' element={<MoviesDetails />} />
      </Routes>
    </div>
    
  )
}

export default App;



//React Router Dom => it is like a third party package 
//Browser Router from react-router-dom
//Routes from react-router-dom
//Route from ...
//NavLinks from ...
//Links from ....