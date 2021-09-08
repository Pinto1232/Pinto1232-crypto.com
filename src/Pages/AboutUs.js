import React from 'react'
import AboutBanner from '../components/Banner/AboutBanner'
import FooterComp from '../components/Footer/FooterComp'
import MapComponent from '../components/Maps/MapComponent'



import './about.scss'

const AboutUs = () => {
    return (
        <div className="about-main">
           <AboutBanner />
           <div container>
              <div className="grid">
                 <div className="col">
                   <h2>Our Address</h2>
                   <br />
                   <p className="address">Address:  301 Imperial Terraces, Tyger Waterfront, Bellville, Cape Town, 7530 </p>
                   <p className="address">Phone: 021 700 4800</p>
                 </div>
                 <div className="col">
                  <MapComponent />
                 </div>
              </div>
           </div>
           <FooterComp />
        </div>
    )
}

export default AboutUs
