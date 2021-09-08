import React from 'react'
import Banner from '../components/Banner/Banner'
import FooterComp from '../components/Footer/FooterComp'
import FormTable from '../components/tables/FormTable'
import './home.scss'

const HomePage = () => {
    return (
        <div className="home-main">
            <Banner />
            <FormTable />
            <FooterComp />
        </div>
    )
}

export default HomePage
