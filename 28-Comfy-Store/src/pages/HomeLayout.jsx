import {Outlet} from 'react-router-dom'
import { Header, Navbar } from '../components'

const HomeLayout = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <section className='align-element mt-10'>
        <Outlet/>
      </section>
    </>
  )
}

export default HomeLayout