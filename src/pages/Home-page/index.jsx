import React, { Component } from 'react'
import WelcomeSection from './sections/WelcomeSection';
import './style.css'
import AboutUsSection from './sections/AboutUsSection';
import SpecialSection from './sections/SpecialSection';
import MenuSection from './sections/MenuSection';
import DiscountSection from './sections/DiscountSection';
import CookingSection from './sections/CookingSection';
class HomePage extends Component {
  render() {
    return (
          // <div className='container__Home'>
          <>
            <WelcomeSection />
            <div className="stars__container">
              <AboutUsSection />
              <SpecialSection />
              <MenuSection />
              <DiscountSection />
              <CookingSection />
            </div>
          </>
          //  {/* </div> */}
      )
  }
}
export default HomePage;