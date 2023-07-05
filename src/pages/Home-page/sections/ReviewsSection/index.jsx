import React, { Component } from 'react';
import './style.css'
class ReviewsSection extends Component {
    render() {
        return (
            <div className='reviews__container'>
                <div className="">
                    <div className="header__reviews">
                        <strong className="title__reviews">
                            Reviews
                        </strong>
                        <p className="ads__reviews">
                            words from our food lovers
                        </p>
                    </div>
                    <section className="cards__container">
                        <div className="comment__card">
                            <div className="header__card">
                                <img src="/assets/profile.png" alt="" />
                                <div className="name-rate__card">
                                    <strong className='name_reviwer'>Alex andrina</strong>
                                    <br />
                                    <img src="/assets/star.png" alt="" />
                                    <img src="/assets/star.png" alt="" />
                                    <img src="/assets/star.png" alt="" />
                                    <img src="/assets/star.png" alt="" />
                                    <img src="/assets/star.png" alt="" />
                                </div>
                            </div>
                            <p className="comment">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “
                            </p>
                        </div>
                        <div className="comment__card">
                            <div className="header__card">
                                <img src="/assets/profile.png" alt="" />
                                <div className="name-rate__card">
                                    <strong className='name_reviwer'>Alex andrina</strong>
                                    <br />
                                    <img src="/assets/star.png" alt="" />
                                    <img src="/assets/star.png" alt="" />
                                    <img src="/assets/star.png" alt="" />
                                    <img src="/assets/star.png" alt="" />
                                    <img src="/assets/star.png" alt="" />
                                </div>
                            </div>
                            <p className="comment">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “
                            </p>
                        </div>
                        <div className="comment__card">
                            <div className="header__card">
                                <img src="/assets/profile.png" alt="" />
                                <div className="name-rate__card">
                                    <strong className='name_reviwer'>Alex andrina</strong>
                                    <br />
                                    <img src="/assets/star.png" alt="" />
                                    <img src="/assets/star.png" alt="" />
                                    <img src="/assets/star.png" alt="" />
                                    <img src="/assets/star.png" alt="" />
                                    <img src="/assets/star.png" alt="" />
                                </div>
                            </div>
                            <p className="comment">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
export default ReviewsSection;