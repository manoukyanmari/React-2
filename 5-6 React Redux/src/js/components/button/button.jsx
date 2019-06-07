import React, {PureComponent} from 'react';
import '../../../style.scss';

class Button extends PureComponent {

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        if(this.props.gotToHomepage) {
           return this.props.gotToHomepage();
        }

        if(this.props.value) {
            this.props.onSort(this.props.value);
        }
    };

    render() {
        return (
            <button onClick={this.handleClick} data-testid={this.props.cypressId} className={'btn button ' + this.props.className}>
                <h3>{this.props.children}</h3>
            </button>
        );
    }
}

export default Button;
