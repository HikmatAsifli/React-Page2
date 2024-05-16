import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="row align-items-start align-items-md-center justify-content-end">
                    <div className="col-md-5 text-md-left pt-5 pt-md-0">
                        <h1 className='mb-2'>
                            Finding Your <br /> Perfect Shoes
                        </h1>
                        <div className="intro-text text-md-left">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut corporis fugiat quis odit doloribus ex asperiores porro, inventore recusandae veniam?</p>
                            <p><Link to="#" className="btn btn-primary">Shop Now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Banner