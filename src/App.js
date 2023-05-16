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
    (async () => {
      try {
        const breedResponse = await axios.get('https://api.thecatapi.com/v1/breeds')
  
        const apiPromises = breedResponse.data.map(cat => {
          return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${cat.id}`)
        })
    
        const imagesResponse = await Promise.all(apiPromises)
    
        const catData = breedResponse.data.map((cat, index) => {
          cat['image'] = imagesResponse[index]?.data[0]?.url
          return cat
        })
    
        setCatBreeds(catData)
      }
      catch(error) {
        console.log(error)
      }
    })()
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