import React, {Component} from 'react';
import './ProjectList-style.css'
import PropTypes from 'prop-types'

import ProjectListEntry from '../ProjectListEntry/ProjectListEntry-component'

class ProjectList extends Component {
    _listItems = (items) => {
        return items.map((item) => {
            const {onProjectSelected} = this.props;
            const {id, name} = item;
            const callback = () => {
                onProjectSelected(item)
            };
            return <ProjectListEntry key={id} className="projectList-row" name={name} onClick={callback}/>
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
    items: PropTypes.array,
    onProjectSelected: PropTypes.func
};


export default ProjectList;