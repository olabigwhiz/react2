import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Movies from './pages/movies/movies'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Home from './pages/home/home'
import Navbar from './component/navbar'
import Signup from './pages/signup/signup'

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  //useEffect Hook that is used for side effect like fetch api
  useEffect(() => {
    async function fetchData() {
      await fetch("https://6af437ef55a1de7dcf03b90e.mockapi.io/api/v1/movies")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setData(data)
        console.log(data)
      })
      .catch((err) => setError(err.message))
    }
    fetchData()
  }, [])
  if(error) {
    return <p>{error}</p>
  }
  if(loading) {
    return <p>loading...</p>
  }
  return (
    <div>
      <Navbar />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/movies' element={<Movies data={data} />} />
         <Route path='/about' element={<About />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/signup' element={<Signup />} />
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