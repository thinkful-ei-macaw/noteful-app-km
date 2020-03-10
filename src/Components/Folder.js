import React from 'react';

class Folder extends React.Component {
  render(){
    // this.props.id
    return (
      <li>{this.props.name}</li>
    );
  }
}

export default Folder;