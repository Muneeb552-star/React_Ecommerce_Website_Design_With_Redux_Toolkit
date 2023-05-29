import './Loader.scss'
import { spinner } from '../../utils/images'

const Loader = () => {
  return (
    <div className='container'>
      <div className='flex flex-center loader'>
        <img src={spinner} alt='loader' />
      </div>
    </div>
  )
}

export default Loader
