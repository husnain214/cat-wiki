import axios from 'axios'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import BreedDetails from './components/BreedDetails'

const App = () => {
  const [catBreeds, setCatBreeds] = useState([])

  useEffect(() => {
    axios.get('/api/breeds').then(response => setCatBreeds(response.data))
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main catData = {catBreeds} />} />
        <Route path='/breed/:id' element={<BreedDetails catBreeds={catBreeds} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App