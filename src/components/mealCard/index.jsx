import React, { Component } from 'react'
import './style.css'
class MealCard extends Component {
    render() {
        return (
            <div className="menu__card">
                <div className="meal-info">
                    <img src={this.props.image} alt={this.props.title} className='meal-image' />
                    <div className="">
                        <strong className="meal-title">{this.props.title}</strong>
                        <p className="meal-desc">{this.props.desc}</p>
                    </div>
                    <hr className='solid-line' />
                </div>
                <p className='meal-price'>Rs {this.props.price}</p>
            </div>
        )
    }
}

export default MealCard;