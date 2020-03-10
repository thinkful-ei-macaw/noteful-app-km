import React from 'react';
import NoteList from './NoteList'
import {Route, Switch} from 'react-router-dom';

class Content extends React.Component {
    render() {
        return (
            <section className='content'>            
            <Switch>
                <Route path="/note/:id" render={props => (
                    <NoteList {...props} data={this.props.data} view="note" />

                )}/>

                <Route path="/folder/:id" render={props => (
                    <NoteList {...props} data={this.props.data} view="folder" />
                )} />

                <Route render={props => (
                    <NoteList {...props} data={this.props.data} />
                )} />
            </Switch>
            </section>
        )
    }
}

export default Content;