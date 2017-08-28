import React, {Component} from 'react';
import './Counter-style.css'
import PropTypes from 'prop-types'

class Counter extends Component {
    _onDecrementPress = () => {
        const {onDecrementPress} = this.props;
        if (onDecrementPress !== undefined) {
            onDecrementPress();
        }
    };

    _onIncrementPress = () => {
        const {onIncrementPress} = this.props;
        if (onIncrementPress !== undefined) {
            onIncrementPress();
        }
    };

    render() {
        const {value} = this.props;
        return (
            <span className="counter">
                <span className="counter-button left-round-border" onClick={this._onDecrementPress}>-</span>
                <span className="counter-value">{value}</span>
                <span className="counter-button right-round-border" onClick={this._onIncrementPress}>+</span>
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