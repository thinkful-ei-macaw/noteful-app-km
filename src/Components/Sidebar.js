import React from 'react';
import FolderList from './FolderList';
import SelectedFolder from './SelectedFolder';

class Sidebar extends React.Component {

    render() {
        return (
            <section className='sidebar'>
                <FolderList folders={this.props.folders}/>
                <SelectedFolder folderName="" />
            </section>
        )
    }
}

export default Sidebar;