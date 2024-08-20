import React, { useEffect, useState} from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/scroll'


function App () {

    const [robots , setRobots] = useState ([])
    const [searchfield , setSearchfield] = useState ('')

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots( users));
    },[])
   const onsearchChange = (event) => {
    setSearchfield (event.target.value)}
    
    const filterRobots = robots.filter(robots =>
      
        robots.name && robots.name.toLowerCase().includes(searchfield.toLowerCase().trim()));

       return !robots.length ? 
            <h1>Loading...</h1>:(
       <div className='tc'>
                   
                    <h1 className= 'f2'>
                        RoboFriends
                    </h1>
                    <SearchBox onSearch = {onsearchChange}/>
                    <Scroll>
                    <CardList robots = {filterRobots}/>
                     </Scroll>
                </div>
)}
export default App;