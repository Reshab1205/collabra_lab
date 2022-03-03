import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div id='not-found'>
        <div className='not_found'>
            <div className='notfound-404'>
                <h1>404</h1>

            </div>
            <h2>We are sorry, page not found</h2>
            <p className='mb-5'> The page is not available</p>
            <NavLink to="/home"> Back To Homepage</NavLink>
        </div>

    </div>
  )
}

export default ErrorPage