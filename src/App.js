import React, { useState,useEffect } from 'react';

import CardList from './CardList';
import Header from './Header';

const App =() =>{
  
  const [publish,setPublish]=useState([]);
  const [searchfeild,setSearchfeild]=useState('');

 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(products=> setPublish(products))
 },[]) 


  const onSearchChange=(event)=> {
    setSearchfeild(event.target.value)
  }


    const fliterPosts=publish.filter(publish=>{
      return publish.name.toLowerCase().includes(searchfeild.toLowerCase());
    })
    return (
      <div className="tc">
        <h1 className='logo'>RoboFriends</h1>
        <Header searchChange={onSearchChange} />
        <div className="card-container">
          <CardList publish={fliterPosts} />
        </div>
      </div>
    );
  }

export default App;