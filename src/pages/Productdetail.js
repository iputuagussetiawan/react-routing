import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
const Productdetail = () => {
  const params=useParams();
  return (
    <>
     <h1>Productdetail</h1>
     <p>{params.productId}</p>
     <Link to=".." relative='path'>Back</Link>
    </>
  )
}
export default Productdetail