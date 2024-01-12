import React from 'react'
import Wrapper from '../assets/wrappers/AboutPage'
import { Outlet } from 'react-router-dom'

const About = h2 => {
  return (
    <Wrapper>
        <h3>About Us</h3>
        <p>Embark on a journey of discovery with our immersive platform. Explore a diverse range of content tailored to your interests, from captivating articles to engaging videos. Whether you're a seasoned enthusiast or a curious newcomer, our site offers a seamless experience where knowledge meets inspiration. Dive into a world where learning is an adventure, and every click opens a door to new possibilities. Join our vibrant community, where ideas flow freely and creativity knows no bounds. Your exploration begins here – where the digital landscape unfolds with endless opportunities.
        </p>
        {/* <Outlet/> */}
    </Wrapper>
  )
}

export default About