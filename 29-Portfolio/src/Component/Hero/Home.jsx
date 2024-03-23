import React from 'react'
import "./Home.css"
import hero from "../pic/vinod-Avatar.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import skill4 from "../pic/skill4.png"
import skill5 from "../pic/skill5.png"
import skill6 from "../pic/skill6.png"
import skill7 from "../pic/skill7.png"
import {Typewriter} from "react-simple-typewriter"

// #e0c341
const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Vinod Chandra</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter 
                    words={[" Professional Coder.", " Frontent Developer."]} 
                    loop cursor cursorStyle='|' 
                    typeSpeed={70} 
                    deleteSpeed={50} 
                    delaySpeed={1000}
                />
              </span>
            </h2>

            <p>I am a dedicated and creative frontend developer with 2.5 years of hands-on experience in crafting immersive web experiences. My passion lies in turning design concepts into interactive, user-friendly websites that leave a lasting impression.</p>

            <div className='hero_btn'>
              
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill4} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill5} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill6} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill7} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
