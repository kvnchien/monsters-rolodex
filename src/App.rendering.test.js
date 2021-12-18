import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component.jsx';

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
      monsters:[],
      searchField: '',
      title: ''
    };

    //TEST
    //this.handleClick1 = this.handleClick1.bind(this);
    //this.handleClick2 = this.handleClick1.bind(this);

    //Bind 'this' context to the 'handleChange' method in the constructor
    //But we don't need to do this if we use the arrow function construct 
    //as shown in the method implementation down below
    //this.handleChange = this.handleChange.bind(this); 
  }

  /*
  //TEST
  handleClick1() {
    console.log("button 1 clicked");
    //console.log(this);
  }
  //TEST
  handleClick3 = () => console.log("button 3 clicked");
  */

  render() {
    //Destructing to make the "state" a local variable
    const {monsters, searchField, title } = this.state;
    //Equivalent to the following two separate assignments
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;
    // const filteredMonsters = monsters.filter(monster => 
    //   monster.name.toLowerCase().includes(searchField.toLowerCase()))
      
    return (
      <div className="App">
        {/* TEST */}
        {/* The 'this.handClick1()' function is here so it's executed immediately
        <button onClick={this.handleClick1()}>click 1</button>
        <button onClick={this.handleClick1}>click 2</button>
        <button onClick={this.handleClick2}>click 3</button>
        <button onClick={this.handleClick3}>click 4</button>
        */}
       <h1> { title } </h1>
       {/* 
         This will work without binding the handleChange method in the constructor 
        <SearchBox placeholder='search monsters' handleChange={e=>this.handleChange(e)}/>
       */}
       <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
        <br/>
        <div><CardList monsters={monsters}/></div>
        
      </div>
    );
  }

  //With this arrow function construct inside the class, the binding of this is done automatically
  //by the javascript when the component is created.. The handleChange(e) {} + the binding inside the
  //constructor is no longer needed
  handleChange = (event) => {
    this.setState({
      searchField: event.target.value,
      title: event.target.value
    });
  }
  /*
  handleChange(e) {
    this.setState({searchField: e.target.value});
  }
  */

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

export default App;
