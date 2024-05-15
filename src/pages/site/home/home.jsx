import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
import Banner from '../../../components/site/banner/Banner'
import Icon from '../../../components/site/icon-section/Icon'
import Collection from '../../../components/site/collection/Collection'

const Home = () => {
    const { data, setdata } = useContext(MainContext)
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
            <Collection/>
        </>
    )
}

export default Home
