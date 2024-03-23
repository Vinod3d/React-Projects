
import './App.css'
import Contact from './Component/Contact/Contact'
import Features from './Component/Features/Features'
import Footer from './Component/Footer'
import Header from './Component/Head/Header'
import Home from './Component/Hero/Home'
import Portfolio from './Component/Portfolio/Portfolio'
import Resume from './Component/Resume/Resume'
import Testimonial from './Component/Testimonial/Testimonial.jsx'
import Projects from './Component/Projects/Projects'


function App() {

  return (
    <>
      <Header/>
      <Home/>
      <Features/>
      {/* <Portfolio/> */}
      <Resume/>
      {/* <Testimonial/> */}
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
