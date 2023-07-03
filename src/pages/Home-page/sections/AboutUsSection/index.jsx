import React, { Component } from 'react'
import './style.css'
import Container from '../../../../components/container'
class AboutUsSection extends Component {
    render() {
        return (
            <div className='aboutus__section'>
                <Container newClass='container__aboutus'>
                    <div className='content__aboutus'>
                        <div>
                            <div className='title__aboutUs'>About US </div>
                            <div className="ads__AboutUs">
                                Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine
                            </div>
                        </div>
                        <div className="description__AboutUs">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.
                        </div>
                        <button className='btn'>Read more</button>
                    </div>
                    <img src='/assets/aboutUsImage.png' alt="AboutUsImage" />
                </Container>
            </div>
        )
    }
}
export default AboutUsSection