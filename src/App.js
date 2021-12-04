import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // We don't need to populate anything for the monsters array anymore.. 
      // because we will get the value for the monsters array from the remote endpoint
      // monsters: [
      //   {name: 'Frankenstein',  id: 'asc1'},
      //   {name: 'Dracula',       id: 'asc2'},
      //   {name: 'Zombie',        id: 'asc3'}
      // ] 
      monsters:[]
    }
  }
  render() {
    return (
      <div className="App">
       {
         this.state.monsters.map(monster => (
           <h1 key={monster.id}>{monster.name}</h1>)
         )}
      </div>
    );
  }

  //Lifecycle method
  async componentDidMount() {
    // The following is an older style for handling promises...
    // Using "async" & "await" makes the program easier to read
    
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(users => this.setState({monsters: users}));

    const stuff = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await stuff.json();
    console.log(users);
    this.setState({monsters: users});
   

  }
}

/*
class App extends Component {

  constructor() {
    super();
    this.state = {
      string: 'Hello Kaylee'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'Hello Kevin'})}>Change Text</button>
        
        </header>
      </div>
    );
  }
}
*/


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
