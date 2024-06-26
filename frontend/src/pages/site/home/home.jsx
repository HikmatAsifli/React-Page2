import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
import Banner from '../../../components/site/banner/Banner'
import Icon from '../../../components/site/icon-section/Icon'
import Collection from '../../../components/site/collection/Collection'
import Card from '../../../components/site/card/Card'
import BigSale from '../../../components/site/bigSale/BigSale'

const Home = () => {
    const { data, setData } = useContext(MainContext)
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                {/* <link rel="icon" type="image/x-icon" href="x"></link> favicon*/}
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Banner />
            <Icon />
            <Collection />
            <Card />
            <BigSale />
        </>
    )
}

export default Home
