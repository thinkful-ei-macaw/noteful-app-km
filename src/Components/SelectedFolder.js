import React from 'react';

class SelectedFolder extends React.Component {

    render() {
      return (
        <article>
          <button>Go Back</button>
          <h3>{this.props.folderName}</h3>
        </article>
      )
    }
}

export default SelectedFolder;