import { PureComponent } from "react";
import './style.css'
class Container extends PureComponent {
    render() {
        return (
            <div className={`main__container ${this.props.newClass}`}>
                {this.props.children}
            </div>
        );
    }
}

export default Container;