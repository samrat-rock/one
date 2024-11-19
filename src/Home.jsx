import React from 'react'
import { Category, Products } from './Data'
import { Link } from 'react-router-dom'

function Home() {
    
  return (
    <>
      <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
  <ul className="list-group">
  {Category.map((a)=><li className="list-group-item"><Link to={`/category/${a}`}>{a}</Link></li>)}
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
                {Products.map((a)=><div className="col-lg-3">
                <div className="shadow p-2 border">
                <img className='w-100' src={a.image} alt="" />
                <p className='fw-bold py-2'>
                   <Link to={`/details/${a.id}`}>{a.title}</Link> 
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
