import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios'

const BreedDetails = ({ catBreeds }) => {
  const [galleryImages, setGalleryImages] = useState([])
  const { id } = useParams()
  const breedData = catBreeds.filter( breed => id === breed.id).at(0)
  
  useEffect(() => {
    (async () => {
      const url = new URL('https://api.thecatapi.com/v1/images/search')

      url.searchParams.set('limit', 10)
      url.searchParams.set('breed_ids', breedData.id)
      // eslint-disable-next-line no-undef
      url.searchParams.set('api_key', process.env.REACT_APP_API_KEY)

      try {
        const response = await axios.get(url)
        setGalleryImages(response.data)
      } catch (error) {
        throw new Error(error)
      }

    })()
  }, [])

  const Rating = points => {
    const ratingArray = []

    for (let i = 0; i < 5; i++) {
      if(i < points) ratingArray.push(<div key={i} className='filled'></div>)
      else ratingArray.push(<div key={i} className='empty'></div>)
    }

    return (
      <div className='rating flex'>
        <span className='sr-only'>{points} points</span>
        {ratingArray}
      </div>
    )
  }

  if(breedData === null) return

  return(
    <main className='breed-details-section grid'>
      <div className='decorated-image'>
        <img src={breedData.image} alt={breedData.name} />
      </div>

      <div className='breed-details flow'>
        <h1 className='fw-600 fs-500'>{breedData.name}</h1>

        <p>{breedData.description}</p>

        <div className='flex'>
          <p className='fs-300 fw-700'>Temperament:</p>
          <p className='fs-300'>{breedData.temperament}</p>
        </div>

        <div className='flex'>
          <p className='fs-300 fw-700'>Origin:</p>
          <p className='fs-300'>{breedData.origin}</p>
        </div>

        <div className='flex'>
          <p className='fs-300 fw-700'>Life Span:</p>
          <p className='fs-300'>{breedData.life_span} years</p>
        </div>
        
        <div className='spec flex justify-between'>
          <p className='fs-300 fw-700'>Adaptability:</p>

          {Rating(breedData.adaptability)}
        </div>

        <div className='spec flex justify-between'>
          <p className='fs-300 fw-700'>Affection Level:</p>

          {Rating(breedData.affection_level)}
        </div>

        <div className='spec flex justify-between'>
          <p className='fs-300 fw-700'>Child Friendly:</p>

          {Rating(breedData.child_friendly)}
        </div>

        <div className='spec flex justify-between'>
          <p className='fs-300 fw-700'>Grooming:</p>

          {Rating(breedData.grooming)}
        </div>

        <div className='spec flex justify-between'>
          <p className='fs-300 fw-700'>Intelligence:</p>

          {Rating(breedData.intelligence)}
        </div>

        <div className='spec flex justify-between'>
          <p className='fs-300 fw-700'>Health Issues:</p>

          {Rating(breedData.health_issues)}
        </div>

        <div className='spec flex justify-between'>
          <p className='fs-300 fw-700'>Social Needs:</p>

          {Rating(breedData.social_needs)}
        </div>

        <div className='spec flex justify-between'>
          <p className='fs-300 fw-700'>Stranger Friendly:</p>

          {Rating(breedData.stranger_friendly)}
        </div>
      </div>

      <h2 className='fw-600 fs-500'>Other photos</h2>

      <div className='image-gallery'>
        {
          galleryImages.map(image => {
            return (
              <div className='image-item' key={image.id}>
                <img src={image.url} alt= {`${breedData.name} cat`} />
              </div>
            )
          })
        }
      </div>
    </main>
  )
}

BreedDetails.propTypes = {
  catBreeds: PropTypes.array.isRequired
}

export default BreedDetails