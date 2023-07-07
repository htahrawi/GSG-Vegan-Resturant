import { Component } from "react";
import Container from '../../../../components/container'
import './style.css'

class Subscribtion extends Component {
    render() {
        return (
            <>
                <Container>
                    <div className="subscribtion">
                        <div className="email-container">
                            <img src="/assets/email.png" alt="" />
                            <span className="email-label">Subscribe to our Newsletter</span>
                        </div>
                        <input type="email" name="email" required className="email-input" placeholder="Your Email id" />
                        <button className="btn">Subscribe</button>
                    </div>
                </Container>
            </>
        )
    }
}
export default Subscribtion;