import CatWikiLogoLight from '../assets/CatwikiLogoLight.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='bg-primary-900 flex justify-between container'>
      <Link to='/'><img src={CatWikiLogoLight} alt='Cat Wiki logo'/></Link>

      <p className='text-neutral-400'>&copy;  created by <span className='fw-500'>username</span> - devchallenges.io 2021</p>
    </footer>
  )
}

export default Footer