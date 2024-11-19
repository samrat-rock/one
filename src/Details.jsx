import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Products } from './Data'


function Details() {
    let {id}=useParams()
    let aa=Products.find((a)=>a.id==id)
  return (
    <>
      <div className="container">
        <h3>Details</h3>
        <h5> <Link to={`/details/${aa.id}`}>{aa.title}</Link> </h5>
        <img src={aa.image} alt="" />
        <p>{aa.price}</p>
        <p>{aa.description}</p>
      </div>
    </>
  )
}

export default Details
