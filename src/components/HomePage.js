import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import CatwikiLogoLight from '../assets/CatwikiLogoLight.svg'
import SearchIcon from '../assets/search-icon.svg'
import Image1 from '../assets/image-1.png'
import Image2 from '../assets/image-2.png'
import Image3 from '../assets/image-3.png'

const HomePage = ({ catData }) => {
  const [searchedBreed, setSearchedBreed] = useState('')
  return (
    <>
      <div className='hero-section grid align-center container'>
        <img className='hero-logo' src={CatwikiLogoLight} alt='Cat Wiki'/>

        <p className='fs-500 text-neutral-400'>Get to know more about your cat breed</p>
        <div className='search-bar flex align-items-center text-primary-500 bg-neutral-400'>
          <label htmlFor='search-breeds' className='sr-only'>Search cat breeds</label>
          <input 
            type='text' 
            name='search-breeds' 
            id='search-breeds' 
            autoComplete='off'
            value={searchedBreed} 
            onChange={ ({ target }) => setSearchedBreed(target.value.toLowerCase()) } 
            placeholder='Enter your breed' />
        
          <img src={SearchIcon} alt='search icon' height='30' width='30' />

          <div className='search-results-wrapper bg-neutral-400'>
            <ul className='search-results'>
              {
                catData
                  .filter( breed => breed.name.toLowerCase().includes(searchedBreed) && searchedBreed !== '' )
                  .map( result => <li key={result.id}><Link className='text-primary-900' to={`/breed/${result.id}`}>{result.name}</Link></li> )
              }
            </ul>
          </div>
        </div>
      </div>

      <div className='most-searched-section bg-neutral-300 flow grid align-center container'>
        <h2 className='fs-400 heading-decoration'>Most Searched Breeds</h2>

        <div className='grid'>
          <p className='fs-600 fw-700 text-primary-600'>66+ Breeds for you to discover</p>
          
          <Link to='/breed/mostSearched' className='flex align-items-center justify-end'>
            <span className='read-more'>Read more</span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className='image-gallery'>
          {
            catData.slice(0, 8).map( ( cat, index ) => {
              const imageClass = index === 0
                ? 'image-item flow decorated-image'
                : 'image-item flow'

              return (
                <div key={cat.id} className={imageClass}>
                  <div>
                    <img src={cat.image} alt={cat.name} />
                  </div>
                  <span className='fw-600 d-block fs-400'>{cat.name}</span>
                </div>
              )
            }
            )
          }
        </div>
      </div>

      <div className='article-section grid container'>
        <div className='flow'>
          <h2 className='fw-700 fs-600 heading-decoration'>Why should you have a cat?</h2>
          <p>Having a cat aroung you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels.</p>
          
          <div className='flex align-items-center'>
            <span className='read-more'>Read more</span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </div>
        </div>

        <div className='article-images grid'>
          <img src={Image1} alt=''/>
          <img src={Image2} alt=''/>
          <img src={Image3} alt=''/>
        </div>
      </div>
    </>
  )
}

HomePage.propTypes = {
  catData: PropTypes.array.isRequired
}

export default HomePage