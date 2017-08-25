import React, {Component} from 'react';
import './Counter-style.css'
import PropTypes from 'prop-types'

class Counter extends Component {
    _onDecrementPress = () => {
        const {onDecrementPress} = this.props;
        if (onDecrementPress !== undefined) {
            onDecrementPress();
        }
        console.log("dec");
    };

    _onIncrementPress = () => {
        const {onIncrementPress} = this.props;
        if (onIncrementPress !== undefined) {
            onIncrementPress();
        }
        console.log("inc");
    };

    render() {
        const {value} = this.props;
        return (
            <span className="Counter">
                <a className="counter-button left-round-border" href="#" onClick={this._onDecrementPress}>-</a>
                <span className="counter-value">{value}</span>
                <a className="counter-button right-round-border" href="#" onClick={this._onIncrementPress}>+</a>
            </span>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number,
    onIncrementPress: PropTypes.func,
    onDecrementPress: PropTypes.func
};


export default Counter;