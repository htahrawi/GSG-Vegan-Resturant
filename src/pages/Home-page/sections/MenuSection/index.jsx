import React, { Component } from 'react'
import Container from '../../../../components/container'
import './style.css'
import MealCard from '../../../../components/mealCard'
import Meals from '../../../../mocks/Meal'
class MenuSection extends Component {
    render() {
        return (
            <div className="menu__section" id='menu'>
                <Container newClass='menu__container'>
                    <div className="header__menu">
                        <strong className="title__menu">
                            Straight From Kitchen
                        </strong>
                        <br />
                        <p className="ads__menu">
                            Our Menu
                        </p>
                    </div>
                    <section className="content_menu">
                        {
                            Meals.map((meal)=>{
                                return (
                                    <MealCard 
                                        key={meal.id}
                                        image={meal.image}
                                        title={meal.title}
                                        desc={meal.description}
                                        price={meal.price}
                                    />
                                )
                            })
                        }
                    </section>
                </Container>
            </div>
        )
    }
}
export default MenuSection;