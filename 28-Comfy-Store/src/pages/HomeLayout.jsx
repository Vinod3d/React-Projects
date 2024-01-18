import {Outlet} from 'react-router-dom'
import { Header } from '../components'

const HomeLayout = () => {
  return (
    <>
      <Header/>
      <section className='align-element'>
        <Outlet/>
      </section>
    </>
  )
}

export default HomeLayout