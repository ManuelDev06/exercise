import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [name, setName] = useState('Irasema');

  return (
    <div>
        <h1>Home</h1>
        <Link to={'/login'}>Go to Login</Link>
        <br/> 
        <Link to={`/show/${name}`}>Go to Show</Link>
    </div>
  )
}

export default Home