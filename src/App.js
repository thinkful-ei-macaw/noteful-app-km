import React from 'react';
import './App.css';
import store from './store'
import Sidebar from './Components/Sidebar'
import Content from './Components/Content'

class App extends React.Component {
  state = store

  render() {
    return (
      <main>
        <Sidebar />
        <Content />

    </main>
    )
  }

}





export default App;
