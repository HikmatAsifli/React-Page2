import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'

const Basket = () => {
    const { data } = useContext(MainContext)
    const [basket] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []);
    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket))
    }, [basket])
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cart</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Count</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.image}</td>
                                <td>{item.count}</td>
                                <td>{item.price}</td>
                                <td><button className='btn btn-danger'>-</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Basket