import React from 'react';
import { Link } from 'react-router-dom';

class Folder extends React.Component {
  render(){
    return (
      <li className={this.props.active ? 'active' : ''}>
        <Link to={"/folder/" + this.props.id}>{this.props.name}</Link>
      </li>
    );
  }
}

export default Folder;