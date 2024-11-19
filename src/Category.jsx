import React from 'react'
import { Products } from './Data'

function Category1() {
    let ccc=Products.filter((a)=>a.category=='electronics')
  return (
    <>
      <section className='container'>
        <h2>category</h2>
        <div className="row">
            {ccc.map((a)=>(
                <div className='col-lg-3'>
                    <div className="shadow p-2">
                        <img className='w-100' src={a.image} alt="" />
                        <h4>{a.title}</h4>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </>
  )
}

export default Category1
