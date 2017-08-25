import './Header-style.css'

import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Header extends Component {
    _selectProject = () => {
        const {selectProject} = this.props;
        if (selectProject !== undefined) {
            selectProject();
        }
        console.log("selectProject clicked");
    };

    render() {
        return (
            <div className="header">
                <div className="empty" /><div className="plus" onClick={this._selectProject}>+</div>
            </div>
        );
    }
}

Header.propTypes = {
    selectProject: PropTypes.func
};

export default Header;