import React from 'react';
import NoteList from './NoteList'

class Content extends React.Component {
    render() {
        return (
            <section className='content'>
            <NoteList notes={this.props.notes} />
            <article><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil sapiente 
                officiis eius consectetur tenetur, libero cum numquam delectus at quasi, minus exercitationem quos, quo ad temporibus 
                consequuntur optio vero alias adipisci molestiae culpa deleniti. Deleniti deserunt possimus, dicta tenetur eligendi 
                dolor officiis illum quo error unde adipisci molestiae atque, laborum odit neque minus eius. Eveniet esse voluptates 
                nostrum nobis hic placeat optio sint itaque ducimus magni cum delectus sequi magnam id praesentium, illo qui assumenda 
                natus suscipit quaerat aliquam.</p></article>
        </section>
        )
    }
}

export default Content;