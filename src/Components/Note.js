import React from 'react';
import { Link } from 'react-router-dom';


class Note extends React.Component {
    render() {
        return (
            <li>
                <div>
                    <h2><Link to={"/note/" + this.props.id}>{this.props.name}</Link></h2>
                    <p>Date modified {this.props.modified}</p>
                </div>
                <button>Delete Note</button>
            </li>
        
        )
    }
}

export default Note;