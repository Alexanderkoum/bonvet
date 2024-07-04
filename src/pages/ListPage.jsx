import React from 'react'
import PersonList from '../components/PersonList.jsx';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';




const ListPage = () => {
  return (
    <div>
        <SearchBar placeholder="Enter location ..." data={PersonList}/>
        <PersonList/>
        
    </div>
  )
}

export default ListPage