import React, { Component } from 'react'
import './style.css'
class SpecialCard extends Component {
    render() {
        return (
            <div className="special__card">
                <div className="header__special__card">
                    <img src={this.props.specialImage} alt={this.props.featureTitle} className='feature-image__special' />
                    <strong className='feature__special'>
                        {this.props.featureTitle}
                    </strong>
                </div>
                <p className="desc__special">
                    {this.props.featureDesc}
                </p>
            </div>
        )
    }
}
export default SpecialCard;