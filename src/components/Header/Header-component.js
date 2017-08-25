import './Header-style.css'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    _addAction = () => {
        const {addActionCallback} = this.props;
        if (addActionCallback !== undefined) {
            addActionCallback();
        }
    };

    render() {
        const {title, addActionCallback} = this.props;
        return (
            <div className="header">
                <div className="header-title">{title}</div>
                { addActionCallback !== undefined && <div className="header-add" onClick={this._addAction}>+</div> }
            </div>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string,
    addActionCallback: PropTypes.func
};

export default Header;