import React from 'react'
import './Collection.css'
import women from '../../../assets/women.jpg.webp'
import children from '../../../assets/children.jpg.webp'
import men from '../../../assets/men.jpg.webp'

import { Link } from 'react-router-dom'

const Collection = () => {
  return (
    <section className='collection mt-5'>
        <div className="container">
            <div className="row">
                <div className='col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0'>
                    <Link to="#" className="collection-item">
                        <div className="collection-img">
                            <img src={women} alt="" className='img-fluid' />
                        </div>
                        <div className="text">
                            <span>Collection</span>
                            <h3>Women</h3>
                        </div>
                    </Link>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0'>
                    <Link to="#" className="collection-item">
                        <div className="collection-img">
                            <img src={children} alt="" className='img-fluid' />
                        </div>
                        <div className="text">
                            <span>Collection</span>
                            <h3>Children</h3>
                        </div>
                    </Link>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0'>
                    <Link to="#" className="collection-item">
                        <div className="collection-img">
                            <img src={men} alt="" className='img-fluid' />
                        </div>
                        <div className="text">
                            <span>Collection</span>
                            <h3>Men</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Collection