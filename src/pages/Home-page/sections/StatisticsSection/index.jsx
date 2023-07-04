import React, { Component } from 'react'
import './style.css'
import Container from '../../../../components/container';
class StatisticsSection extends Component {
    render() {
        return (
            <div className="statistics__section">
                <Container newClass='statistics__container'>
                    <div className="statistics">
                        <div className="statistic" >
                            <img src="/assets/dish.png" alt="" />
                            <div className="info__statistic">
                                <strong className='number'>250+</strong>
                                <span className='title__statistic'>Delicacy</span>
                            </div>
                        </div>
                        <div className="statistic" >
                            <img src="/assets/chef2.png" alt="" />
                            <div className="info__statistic">
                                <strong className='number'>10+</strong>
                                <span className='title__statistic'>renowed chefs</span>
                            </div>
                        </div>
                        <div className="statistic" >
                            <img src="/assets/team.png" alt="" />
                            <div className="info__statistic">
                                <strong className='number'>30+</strong>
                                <span className='title__statistic'>Members</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
export default StatisticsSection;