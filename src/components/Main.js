import HomePage from './HomePage'
import PropTypes from 'prop-types'
// import BreedDetails from './BreedDetails'
// import SearchedBreeds from './SearchedBreeds'

const Main = ({ catData }) => {
  return (
    <>
      <HomePage catData = {catData} />
    </>
  )
}

Main.propTypes = {
  catData: PropTypes.array.isRequired
}

export default Main