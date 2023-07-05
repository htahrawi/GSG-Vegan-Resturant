import React, { Component } from 'react'
import './style.css'
import Container from '../../../../components/container'
class InfoSection extends Component {
    render() {
        return (
            <div className='info__section'>
                <Container newClass='info__container'>
                    <section className="desc__info">
                        <div className='header__info'>
                            <img src="/assets/logo.png" alt="" />
                            <strong className='res_name'>Golden View Dine </strong>
                        </div>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
                        <div className="media__info">
                            <img src="/assets/instaIcon.png" alt="Instagram" />
                            <img src="/assets/twitterIcon.png" alt="twitter" />
                            <img src="/assets/youtubeIcon.png" alt="youtube" />
                        </div>
                    </section>
                    <section className="links__info">
                        <strong className="title__info">Other Links</strong>
                        <ul className='ul__links'>
                            <li>Privacy Policy</li>
                            <li>Terms & conditions</li>
                            <li>Blogs</li>
                            <li>Our Team</li>
                            <li>Our Kitchen</li>
                        </ul>
                    </section>
                    <section className="contact__info">
                        <strong className="title__info">Contact Us</strong>
                        <div className="contact__card">
                            <img src="/assets/emailIcon.png" alt="" />
                            <span>Gogreendineservice@gmail.com</span>
                        </div>
                        <div className="contact__card">
                            <img src="/assets/locationIcon.png" alt="" />
                            <span>AZ complex bylane3 Mandari Rd
                                Mumbai 1100867</span>
                        </div>
                        <div className="contact__card">
                            <img src="/assets/phoneIcon.png" alt="" />
                            <span>+1800 287 256</span>
                        </div>
                    </section>
                </Container>
            </div>
        )
    }
}
export default InfoSection;