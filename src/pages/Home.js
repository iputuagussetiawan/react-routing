import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();
  function navigateHandler(){
    navigate('/products')
  }
  return (
    <>
      <h1>Home</h1>
      <p>Hallow From Home</p>
      <Link to="/products">Go To Product</Link>
      <button onClick={navigateHandler}>Navigate</button>
    </>
  )
}

export default Home