import React from 'react'
import './BigSale.css'
import { Link } from 'react-router-dom'
import blog1 from "../../../assets/blog_1.jpg.webp"

const BigSale = () => {
    return (
        <section className="sale">
            <div className="container">
                <div className="row justify-content-center  mb-5">
                    <div class="col-md-7 section-heading text-center pt-4">
                        <h2>Big Sale!</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-7 mb-5">
                        <Link to="#">
                            <img src={blog1} alt="" className='img-fluid rounded' />
                        </Link>
                    </div>
                    <div className="col-md-12 col-lg-5 text-center pl-md-5">
                        <h2>
                            <Link to="#">50% less in all items</Link>
                        </h2>
                        <p>
                            By
                            <Link to="#">
                                Carl Smith
                            </Link>
                            <span>•</span>
                            September 3, 2018
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                        <Link to="#" className='btn btn-primary'>Shop Now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BigSale