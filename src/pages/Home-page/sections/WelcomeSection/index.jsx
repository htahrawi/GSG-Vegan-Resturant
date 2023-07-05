import React, { Component } from 'react'
import './style.css'
import Container from '../../../../components/container'
class WelcomeSection extends Component {
    render() {
        return (
            <div className="welcome__section">
                <Container>
                    <div className="opening">
                        <nav className='navBar'>
                            <img src='/assets/logo.png' alt="" className='logo'/>
                            <ul>
                                <li><a href='#home'><span>Home</span></a></li>
                                <li><a href='#about-us'><span>About Us</span></a></li>
                                <li><a href='#special'><span>Special</span></a></li>
                                <li><a href='#menu'><span>Menu</span></a></li>
                                <li><a href='#blogs'><span>Blogs</span></a></li>
                                <li><a href='#'><img src="/assets/search.png" alt="" /></a></li>
                            </ul>
                            <button className='booking-btn'>Booking now</button>
                        </nav>
                        <section className='welcome__opening'>
                            <h2 className='title'>Welcome To<br />Golden View Dine</h2>
                            <p className='explore'>Explore the authentic vegan dishes with your friends and family</p>
                            <button className='btn'>Read more</button>
                        </section>
                    </div>
                </Container>
            </div>
        )
    }
}

export default WelcomeSection;