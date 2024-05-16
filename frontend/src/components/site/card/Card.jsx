import React, { useContext } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import MainContext from '../../../context/context'

const Card = () => {
    const { data, addToBasket } = useContext(MainContext)
    const handleAddToBasket = (id) => {
        addToBasket(id);
    };

    return (
        <section className="cards mt-5 bg-light">
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-md-7 site-heading text-center pt-4">
                        <h2>Featured Products</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        data.map(item => (
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-5" key={item.id}>
                                <div className="card">
                                    <img className='card-img-top' src={item.image} width="300px" height="300px" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <p>{item.price}</p>
                                        <Link to="#" className="btn btn-success" onClick={() => handleAddToBasket(item.id)}>Card</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Card