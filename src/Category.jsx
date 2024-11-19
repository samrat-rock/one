import React from 'react'
import { Products } from './Data'
import { Link, useParams } from 'react-router-dom'

function Category1() {
    let {cid}=useParams()
    let ccc=Products.filter((a)=>a.category==cid)
  return (
    <>
      <section className='container'>
        <h2>{cid}category</h2>
        <div className="row">
            {ccc.map((a)=>(
                <div className='col-lg-3'>
                    <div className="shadow p-2">
                        <img className='w-100' src={a.image} alt="" />
                        <h4> <Link to={`/details/${a.id}`}>{a.title}</Link></h4>
                        
                    </div>
                </div>
            ))}
        </div>
        
      </section>
    </>
  )
}

export default Category1
