import PropTypes from 'prop-types'

const SearchedBreeds = ({ popularCats }) => {  
  return (
    <main className='searched-breeds-section flow'>
      <h1 className='fs-500 fw-600'>Top 10 most searched breed</h1>

      {
        popularCats.map( cat => {
          return (
            <article key={cat.id} className='searched-breeds__article grid'>
              <img src={cat.image} alt={cat.name} />
            
              <h2 className='fs-500'>{cat.name}</h2>
              <p>{cat.desc}</p>
            </article>
          )
        })
      }
    </main>
  )
}

SearchedBreeds.propTypes = {
  popularCats: PropTypes.array.isRequired
}

export default SearchedBreeds