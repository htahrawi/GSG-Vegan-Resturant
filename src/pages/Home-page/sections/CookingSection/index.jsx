import React, { Component } from 'react'
import './style.css'
import Container from '../../../../components/container'
class CookingSection extends Component {
    render() {
        return (
            <div>
                <Container newClass='cooking__container'>
                    <section className="cooking__content">
                        <div className="cooking-info">
                            <div className="cooking-title">Cooking ingredients</div>
                            <div className="cooking-ads">What goes in</div>
                            <p className="cooking-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit.
                            </p>
                            <button className='btn'>
                                Read more
                            </button>
                        </div>
                        <img src="/assets/cooking.png" alt="" />
                    </section>
                </Container>
            </div>
        )
    }
}
export default CookingSection