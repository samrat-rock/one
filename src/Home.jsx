import React from 'react'
import { Category, Products } from './Data'

function Home() {
    let electronics=Products.filter((a)=>a.category=="electronics")
  return (
    <>
      <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
  <ul className="list-group">
  {Category.map((a)=><li className="list-group-item">{a}</li>)}
</ul>

                </div>
                <div className="col-lg-9">
                    <img className='w-100' src="https://thulo.com.np/assets/landlord/uploads/media-uploader/sell-online-at-thulo1730868009.webp" alt="" />
                </div>
            </div>
        </div>
      </section>

      <section>
        <div className="container">
            <h2 className='font-bold'>All Product</h2>
            <div className="row">
                {electronics.map((a)=><div className="col-lg-3">
                <div className="shadow p-2 border">
                <img className='w-100' src={a.image} alt="" />
                <p className='fw-bold py-2'>
                    {a.title}
                </p>
            </div>
            </div>)}
            
            </div>
        </div>
      </section>
    </>
  )
}

export default Home
