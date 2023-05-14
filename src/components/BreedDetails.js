import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios'
const BreedDetails = ({ catBreeds }) => {
  const { id } = useParams()
  const [breedData, setBreedData] = useState(null)

  useEffect(() => {
    axios.get(`/api/breeds/${id}`)
      .then(response => {
        const { data } = response

        catBreeds.filter(breed => breed.id === id).map(breed => {
          setBreedData({
            ...data,
            name: breed.name,
            image: breed.image
          })
        })
      })
      .catch(error => console.error(error))
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

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, nobis voluptatibus velit laborum necessitatibus saepe! Distinctio, fugiat earum! Aliquam nemo laborum velit explicabo architecto autem accusantium sit accusamus doloribus eaque.</p>

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
        <div className='image-item'>
          <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' alt=''/>
        </div>
        <div className='image-item'>
          <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' alt=''/>
        </div>
        <div className='image-item'>
          <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' alt=''/>
        </div>
        <div className='image-item'>
          <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' alt=''/>
        </div>
        <div className='image-item'>
          <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' alt=''/>
        </div>
        <div className='image-item'>
          <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' alt=''/>
        </div>
        <div className='image-item'>
          <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' alt=''/>
        </div>
        <div className='image-item'>
          <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' alt=''/>
        </div>
      </div>
    </main>
  )
}

BreedDetails.propTypes = {
  catBreeds: PropTypes.array.isRequired
}

export default BreedDetails