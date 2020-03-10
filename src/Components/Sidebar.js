import React from 'react';

class Sidebar extends React.Component {

    render() {
        return (
            <section className='sidebar'>
                <ul>
                    <li>Folder 1</li>
                    <li>Folder 2</li>
                    <li>Folder 3</li>
                    <li><button>Add Folder</button></li>
                </ul>
                <article><button>Go Back</button>
                    <h3>Folder X</h3>
                </article>
            </section>
        )
    }
}

export default Sidebar;