import React, { Component } from 'react'
import Container from '../../../../components/container'
import './style.css'
import JuiceImage from '../../../../assets/juice.png';
import ChefImage from '../../../../assets/chef.png';
import DishesImage from '../../../../assets/dishes.png'
import SpecialCard from '../../../../components/specialCard';
class SpecialSection extends Component {
    render() {
        return (
            // <Container newClass="Special__Container">
            <div className='special__container'>
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
                            specialImage={JuiceImage}
                            featureTitle='Fresh food'
                            featureDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '
                        />
                        <SpecialCard
                            specialImage={ChefImage}
                            featureTitle='skilled Chef'
                            featureDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '
                        />
                        <SpecialCard
                            specialImage={DishesImage}
                            featureTitle='Exotic dishes'
                            featureDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '
                        />
                    </section>               .
                </Container>

            </div>
            // </Container>
        )
    }
}
export default SpecialSection;