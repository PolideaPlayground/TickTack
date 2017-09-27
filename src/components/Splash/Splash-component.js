import './Splash-style.css'
import classNames from 'classnames'

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Splash extends PureComponent {
    render() {
        return (
            <div className={classNames("Splash", this.props.className)}>
                Splash. Loading...
            </div>
        );
    }
}

Splash.propTypes = {
};

export default Splash;