import React from 'react';

class Note extends React.Component {
    render() {
        return (
            <li>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>Date modified {this.props.modified}</p>
                </div>
                <button>Delete Note</button>
            </li>
        
        )
    }
}

export default Note;