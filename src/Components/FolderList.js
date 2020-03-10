import React from 'react';
import Folder from './Folder';

class FolderList extends React.Component {
  render() {

    console.log(this.props)
    const id = this.props.match.params.id || null;

    const folders = this.props.folders.map(folder => (
      <Folder key={folder.id} id={folder.id} active={folder.id === id} name={folder.name} />
    ))

    return (
      <ul>
        {folders}
        <li><button>Add Folder</button></li>
      </ul>
    )
  }
}

export default FolderList;