import React from 'react';
import NoteList from './NoteList'
import SelectedNote from './SelectedNote'

class Content extends React.Component {
    render() {
        return (
            <section className='content'>
            <NoteList notes={this.props.notes} />
            <SelectedNote content="" />
            </section>
        )
    }
}

export default Content;