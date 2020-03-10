import React from 'react';
import Note from './Note'

class NoteList extends React.Component {
    
    render() {
        const notes = this.props.notes.map(note => (
            <Note key={note.id} id={note.id} name={note.name} modified={note.modified} />)
            )
        return (
            <ul>
                {notes}
            </ul>
        )
    }
}

export default NoteList;