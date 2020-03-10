import React from 'react';
import './App.css';
import store from './store'
import Sidebar from './Components/Sidebar'
import Content from './Components/Content'
import Header from './Components/Header'

class App extends React.Component {
  state = store

  render() {
    return (
      <div className="App">
        <Header />
      <main>
        <Sidebar data={this.state}/>
        <Content data={this.state}/>
      </main>
      </div>
    );
  }

}





export default App;
