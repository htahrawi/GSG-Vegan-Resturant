import React, { Component } from 'react'
import './style.css'
import Container from '../../../../components/container'
export default class DiscountSection extends Component {
    render() {
        return (
            <div className='discount__section'>
                <Container newClass='discount__container'>
                    <img src="/assets/congrats.png" alt="" />
                    <section className="discount-content">
                        <strong className="title__discount">
                            Come join us for a lunch this weekend and enjoy
                        </strong>
                        <strong className="value__discount">
                            FLAT 10% OFF
                        </strong>
                        <button className='btn'>Book Table</button>
                    </section>
                    <img src="/assets/congrats.png" alt="" />
                </Container>
            </div>
        )
    }
}
