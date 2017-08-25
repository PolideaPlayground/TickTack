import React, {Component} from 'react';
import './ProjectList-style.css'
import PropTypes from 'prop-types'

import ProjectListEntry from '../ProjectListEntry/ProjectListEntry-component'

class ProjectList extends Component {
    _listItems = (items) => {
        return items.map((item) => {
            const {id, name} = item;
            return <ProjectListEntry className="projectList-row" name={name}/>
        })
    };

    render() {
        const {items} = this.props;
        return (
            <div className="projectList">
                {this._listItems(items)}
            </div>
        );
    }
}

ProjectList.propTypes = {
    items: PropTypes.array
};


export default ProjectList;