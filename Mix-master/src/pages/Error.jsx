import React from 'react'
import Wrapper from '../assets/wrappers/ErrorPage'
import {Link, useRouteError} from 'react-router-dom';
import img from '../assets/not-found.svg'

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if(error.status === 404){
    return(
      <Wrapper>
        <div>
          <img src={img} alt="Not Found"/>
          <h3>Oops! Page Not Found</h3>
          <p>The page you are looking for could not be found. Please check the URL and</p>
          <Link to='/'>Back Home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  )
}

export default Error