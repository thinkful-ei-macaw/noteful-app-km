import React from 'react';
import {Route, Switch} from 'react-router-dom';

import FolderList from './FolderList';
import SelectedFolder from './SelectedFolder';

import './Sidebar.css';

class Sidebar extends React.Component {

    render() {
        return (
            <section className='sidebar'>
                <Switch>
                    <Route path="/note/:id" render={props => (
                        <SelectedFolder {...props} data={this.props.data} />
                    )}/>

                    <Route path="/folder/:id" render={props => (
                        <FolderList {...props} folders={this.props.data.folders} />
                    )} />

                    <Route render={props => (
                        <FolderList {...props} folders={this.props.data.folders} />
                    )} />
                </Switch>
            </section>
        )
    }
}

export default Sidebar;