import React from 'react'
import './Icon.css'

const Icon = () => {
    return (
        <section className="icons mb-4 mt-5 border-bottom">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4">
                        <div className="icon mr-4 align-self-start">
                            <div className="icon-truck">
                                <i className="fas fa-truck"></i>
                            </div>
                            <div className="text">
                                <h2>Free Shipping</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident omnis reiciendis error earum, distinctio sed?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4">
                        <div className="icon mr-4 align-self-start">
                            <div className='icon-truck'>
                                <i class="fa-solid fa-rotate-right"></i>
                            </div>
                            <div className="text">
                                <h2>Free Shipping</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident omnis reiciendis error earum, distinctio sed?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4">
                        <div className="icon mr-4 align-self-start">
                            <div className='icon-truck'>
                                <i class="fa-solid fa-question"></i>
                            </div>
                            <div className="text">
                                <h2>Free Shipping</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident omnis reiciendis error earum, distinctio sed?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Icon