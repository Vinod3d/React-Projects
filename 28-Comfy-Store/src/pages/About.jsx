import React from 'react'

const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center '>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          we love
        </h1>
        <div className="stats bg-primary shadow">
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ducimus nobis optio sunt distinctio minima, repellendus consequatur nam pariatur beatae obcaecati voluptatum, vero laboriosam dolor aliquam fugiat illum eum ipsam suscipit? Soluta, itaque unde? Sit, vitae. Autem quis rerum necessitatibus nemo quos inventore iure?
      </p>
    </>
  )
}

export default About