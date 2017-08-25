import React, {Component} from 'react';
import './ProjectListEntry-style.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class ProjectListEntry extends Component {
    render() {
        const {name, onClick} = this.props;
        return (
            <div className={classNames("projectListEntry", this.props.className)} onClick={onClick}>
                <div className="projectListEntry-name">{name}</div>
            </div>
        );
    }
}

ProjectListEntry.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func
};


export default ProjectListEntry;