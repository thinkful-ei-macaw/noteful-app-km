import React from 'react';

class SelectedFolder extends React.Component {

    render() {
      console.log(this.props)

      let note = this.props.data.notes.find(n => n.id === this.props.match.params.id);
      let folder = this.props.data.folders.find(f => f.id === note.folderId);

      return (
        <article>
          <button>Go Back</button>
          <h3>{folder.name}</h3>
        </article>
      )
    }
}

export default SelectedFolder;