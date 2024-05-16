import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './App.css'

function App() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState([]);
    const [basket, setBasket] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []);
    const router = createBrowserRouter(ROUTES);
    useEffect(() => {
        axios.get("http://localhost:3000/products").then(res => {
            setData([...res.data])
            setLoading(false)
        }).catch(error => {
            setError(error)
            setLoading(false)
        })
    }, [])
    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket));
    }, [basket]);
    function addToBasket(id) {
        let basketItem = basket.find((x) => x._id == id);

        if (!basketItem) {
            let target = data.find((x) => x._id == id);

            let newItem = {
                ...target,
                count: 1,
                totalPrice: target.price,
            };
            setBasket([...basket, newItem]);
        } else {
            basketItem.count += 1;
            basketItem.totalPrice += basketItem.price;
            setBasket([...basket]);
        }
    }
    const contextData = {
        data, setData,
        loading, setLoading,
        error, setError,
        basket, setBasket
    }
    return (
        <>
            <MainContext.Provider value={contextData}>
                <RouterProvider router={router} />
            </MainContext.Provider>
        </>
    );
}

export default App;
