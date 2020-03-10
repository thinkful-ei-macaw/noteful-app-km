import React from 'react';

class SelectedFolder extends React.Component {

    render() {
      let note = this.props.data.notes.find(n => n.id === this.props.match.params.id);
      let folder = this.props.data.folders.find(f => f.id === note.folderId);

      return (
        <article>
          <button onClick={() => this.props.history.goBack()}>Go Back</button>
          <h3>{folder.name}</h3>
        </article>
      )
    }
}

export default SelectedFolder;