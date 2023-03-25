import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
     <h1>Home</h1>
     <p>Hallow From Home</p>
     <Link to="/products">Go To Product</Link>
    </>
  )
}

export default Home