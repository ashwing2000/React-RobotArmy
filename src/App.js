import React, { Component } from 'react';

import CardList from './CardList';
import Header from './Header';
export default class App extends Component {
  constructor() {

    super()
    this.state = {
      robots: [],
      
      searchfeild: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users }))
  }
  onSearchChange=(event)=> {
    this.setState({searchfeild:event.target.value})
  }

  render() {
    const validation=()=>{
    let filterRobots=this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase())
      });

          return filterRobots;
    }
   

    return (
      <div className="tc">
        <h1 className='logo'>RoboFriends</h1>
        <Header searchChange= {this.onSearchChange} />
        <div className="card-container">
          <CardList robots={validation()} />
        </div>
      </div>
    );
  }
}

