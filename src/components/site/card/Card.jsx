import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <section className="cards mt-5 bg-light">
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-md-7 site-heading text-center pt-4">
                        <h2>Featured Products</h2>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                        <div className="card">
                            <img className='card-img-top' src="..." alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Name</h5>
                                <p className="card-text">Desc</p>
                                <p>Price</p>
                                <Link to="#" className="btn btn-success">Card</Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Card