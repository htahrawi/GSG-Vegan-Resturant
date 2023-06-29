import React, { Component } from 'react'
import WelcomeSection from './sections/WelcomeSection';
import './style.css'
class HomePage extends Component {
  render() {
    return (
          <div className='container__Home'>
            <WelcomeSection />
          </div>
      )
  }
}
export default HomePage;