import React, { Component } from 'react'
import './style.css'
class BlogCard extends Component {

    render() {
        const reverse = this.props.reverse ? true : false;
        return (
            reverse ?
                <div className="card__blog">
                    <div className="content__card">
                        <h3 className='name__card'>Cooking Dining Experience</h3>
                        <div className="p_card">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                        </div>
                        <button className='btn__card'>
                            Read more
                        </button>
                    </div>
                    <img src={this.props.blogImage} alt="" className='blog__image' />
                </div>
                :
                <div className="card__blog">
                    <img src={this.props.blogImage} alt="" className='blog__image' />
                    <div className="content__card">
                        <h3 className='name__card'>Cooking Dining Experience</h3>
                        <div className="p_card">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                        </div>
                        <button className='btn__card'>
                            Read more
                        </button>
                    </div>
                </div>
        )
    }
}
export default BlogCard;