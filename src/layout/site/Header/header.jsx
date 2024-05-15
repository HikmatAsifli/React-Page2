
import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <>
            <header className="py-3 mb-4 mt-4 border-bottom">
                <div className="container d-flex flex-wrap">
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
                    <Link to="/" className="d-flex align-items-center justify-content-center mb-3 mb-lg-0  link-body-emphasis text-decoration-none">
                        <span className="fs-4 logo">Shoppers</span>
                    </Link>
                    <ul className="nav">
                        <li classNameName="nav-item">
                            <Link to="#" className="nav-link link-body-emphasis px-2">
                                <i className="fa-solid fa-user"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link link-body-emphasis px-2">
                                <i className="fa-regular fa-heart"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link link-body-emphasis px-2">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </Link>
                        </li>
                    </ul>

                </div>
            </header>
            <nav className="py-2  ">
                <div className="container d-flex flex-wrap justify-content-center">
                    <ul className="nav d-flex justify-content-center align-items-center">
                        <li className="nav-item"><Link to="#" className="nav-link link-body-emphasis px-2 active" aria-current="page">Home</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link link-body-emphasis px-2">About</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link link-body-emphasis px-2">Shop</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link link-body-emphasis px-2">Catalogue</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link link-body-emphasis px-2">New Arrivals</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link link-body-emphasis px-2">Contact</Link></li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Header
