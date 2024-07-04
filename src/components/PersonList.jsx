import React from 'react';
import axios from 'axios';
import imagePerson from '../assets/people05.png';
import FilterList from './FilterList';
import ListItemTile from './ListItemTile';
import mapicon from '../assets/place.png';
import { Link } from 'react-router-dom';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log({persons});
      })
  }

  render() {
    return (
      <div className={`py-3 px-5 bg-white rounded-xl my-5`}>
          <div className={`sortBar flex justify-between items-center`}>
            <div className={`flex gap-2 items-center bg-slate-50 pr-5 rounded-full h-8`}>
              <p className={`uppercase font-bold text-poppins text-[14px] my-5`}><div className={`h-8 w-8 flex items-center justify-center bg-yellow-300 rounded-full`}><img className={`h-4`} src={mapicon} alt="" srcset="" /> </div></p>map view
            </div>
            <FilterList/>
          </div>
          <ul className={`search my-5 dataResult overflow-y-auto max-h-[550px]`}>
          {
            this.state.persons
              .map(person =>
                <li className={`sm:inline-block sm:hover:-translate-y-1 sm:duration-300`}>
                  <Link to="/ProfilePage" state={{ from: person.id , lat:person.address.geo.lat , long:person.address.geo.lng}}>
                 <ListItemTile key={person.id} name={person.name} id={person.id} street={person.address.street} suite={person.address.suite} city={person.address.city} email={person.email} companyName={person.company.name} profilePicture={imagePerson}/>
                 </Link>
                </li>
              )
          }
        </ul>
      </div>
      
    )
  }
}

