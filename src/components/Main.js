import HomePage from './HomePage'
import PropTypes from 'prop-types'

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