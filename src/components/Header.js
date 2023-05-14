import { Link } from 'react-router-dom'
import CatwikiLogoDark from '../assets/CatwikiLogoDark.svg'

const Header = () => {
  return (
    <header>
      <Link to='/'><img src={CatwikiLogoDark} alt='site logo' /></Link>
    </header>
  )
}

export default Header