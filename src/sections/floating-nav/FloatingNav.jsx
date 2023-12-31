import Nav from './Nav'
import './floating-nav.css'
import Scrollspy from 'react-scrollspy'
import data from './data'

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <Scrollspy offset={-400} className='scrollspy' items={['header', 'about', 'services', 'portfolio', 'contact']}
       currentClassName='active'>
        {
          data.map(item => <Nav key={item.id} item={item}/>)
        }
      </Scrollspy>
    </ul>
  )
}

export default FloatingNav