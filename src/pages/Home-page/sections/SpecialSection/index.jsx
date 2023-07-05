import React, { Component } from 'react'
import Container from '../../../../components/container'
import './style.css'
import SpecialCard from '../../../../components/specialCard';
class SpecialSection extends Component {
    render() {
        return (
            <div className='special__container' id='special'>
                <Container>
                    <div className="header__special">
                        <strong className="title__special">
                            Special Section
                        </strong>
                        <br />
                        <p className="ads__special">
                            What makes us special
                        </p>
                    </div>
                    <br /><br /><br />
                    <section className="content__special">
                        <SpecialCard
                            specialImage='/assets/juice.png'
                            featureTitle='Fresh food'
                            featureDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '
                        />
                        <SpecialCard
                            specialImage='/assets/chef.png'
                            featureTitle='skilled Chef'
                            featureDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '
                        />
                        <SpecialCard
                            specialImage='/assets/dishes.png'
                            featureTitle='Exotic dishes'
                            featureDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '
                        />
                    </section>               .
                </Container>

            </div>
        )
    }
}
export default SpecialSection;