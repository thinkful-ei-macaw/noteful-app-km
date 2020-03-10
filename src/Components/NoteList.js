import React from 'react';
import Note from './Note'
import SelectedNote from './SelectedNote'

class NoteList extends React.Component {
    
    render() {
        const id = this.props.match.params.id || null;
        let notes = this.props.data.notes
        let noteContent = ""

        if (id) {
            if (this.props.view === "folder") {
                
                notes = this.props.data.notes.filter(note => note.folderId === id)
            } else {
                let n = this.props.data.notes.filter(note => note.id === id)
                notes = n;
                noteContent = n[0].content;
            }
        }
        

        let noteComponents = notes.map(note => (
            <Note key={note.id} id={note.id} name={note.name} />
          ))

        return (
            <ul>
                {noteComponents}
                {this.props.view === "folder" ? (
                    <li><button>Add Note</button></li>
                ) : (
                    <SelectedNote content={noteContent} />
                )}
            </ul>
           
        )
    }
}

export default NoteList;