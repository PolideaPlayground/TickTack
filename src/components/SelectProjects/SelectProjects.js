import React, {Component} from 'react';

import Header from '../Header/Header-component'
import ProjectList from '../ProjectList/ProjectList-component'

class SelectProject extends Component {
    render() {
        return (
            <div>
                <Header title="Select project"/>
                <ProjectList items={[
                    {
                        id: 0,
                        name: "Entry 1"
                    },
                    {
                        id: 1,
                        name: "Entry 2"
                    },
                    {
                        id: 1,
                        name: "Entry 3"
                    }
                ]}/>
            </div>
        )
    }
}

export default SelectProject;
