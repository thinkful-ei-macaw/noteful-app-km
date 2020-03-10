import React from 'react';
import './App.css';
import store from './store'

class App extends React.Component {
  state = store

  render() {
    return (
      <main>
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
        <section className='content'>
            <ul>
                <li>
                    <h2>Note 1</h2>
                    <p>
                        Date modified ...
                    </p>
                    <button>Delete Note</button>
                </li>
                <li>
                    <h2>Note 1</h2>
                    <p>
                        Date modified ...
                    </p>
                    <button>Delete Note</button>
                </li>
                <li>
                    <h2>Note 1</h2>
                    <p>
                        Date modified ...
                    </p>
                    <button>Delete Note</button>
                </li>
                <li>
                    <button>Add Note</button>
                </li>
            </ul>
            <article><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil sapiente 
                officiis eius consectetur tenetur, libero cum numquam delectus at quasi, minus exercitationem quos, quo ad temporibus 
                consequuntur optio vero alias adipisci molestiae culpa deleniti. Deleniti deserunt possimus, dicta tenetur eligendi 
                dolor officiis illum quo error unde adipisci molestiae atque, laborum odit neque minus eius. Eveniet esse voluptates 
                nostrum nobis hic placeat optio sint itaque ducimus magni cum delectus sequi magnam id praesentium, illo qui assumenda 
                natus suscipit quaerat aliquam.</p></article>
        </section>

    </main>
    )
  }

}





export default App;
