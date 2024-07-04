import React from 'react';
import axios from 'axios';
import imagePerson from '../assets/people05.png';
import FilterList from './FilterList';
import ListItemTile from './ListItemTile';
import mapicon from '../assets/place.png';
import returnIcon from '../assets/arrow.png';
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import MapContainer from "../components/Map";
import { useLocation } from 'react-router-dom';

var baseURL;
var id;
var mlat;
var long;

export default class SinglePerson extends React.Component {
  
  state = {
    persons: []
  }
   
  componentDidMount() {
    var baseURL = "https://jsonplaceholder.typicode.com/users?id="+this.props.id;
    axios.get(baseURL)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        
      })
  }

  render(){
    mlat = this.props.lat;
    long = this.props.lng;
    return (
      <div className={`py-3 px-5 bg-white rounded-xl my-5`}>
          <div className={`sortBar flex justify-between items-center`}><Link to="/">
            <div className={`flex gap-2 items-center bg-slate-50 pr-5 rounded-full h-8`}>
              <p className={`uppercase font-bold text-poppins text-[14px] my-5`}><div className={`h-8 w-8 flex items-center justify-center bg-yellow-300 rounded-full`}><img className={`h-4`} src={returnIcon} alt="" srcset="" /> </div></p>RETOUR
            </div></Link>
            
          </div>
          <div className={`search my-5 dataResult overflow-y-auto max-h-[550px] sm:max-h-full sm:max-w-[1080px] sm:mx-auto`}>
          {
            this.state.persons
              .map(person =>
              <div className={`flex sm:flex-row flex-col sm:gap-36`}>
                <div className={`sm:inline-block sm:duration-300 overflow-y-auto sm:max-h-[800px] sm:basis-1/2`}>
                  <div className={`flex gap-10 p-3 bg-slate-50 rounded-xl`}>
                    <div><img src={imagePerson} className={`w-[10rem]`} /></div>
                    <div>
                      <p className={`my-3 font-bold`}>{person.name}</p>
                      <p>{person.address.street} ,{person.address.suite}, {person.address.city}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-5`}>
                    <p className={`my-5 font-bold`}>Description</p>
                    <p className={`my-5 font-thin`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloribus iste voluptas, nobis ipsa facilis excepturi ratione natus inventore autem rerum. Id odio alias optio natus quaerat fugit commodi ad. <br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor deserunt eligendi unde suscipit animi nisi est laborum ullam doloremque esse quam harum aperiam repellendus eveniet, culpa, voluptatem ratione odit!</p>
                  </div>
                  <div className={`px-3 py-5`}>
                    <p className={`my-5 font-bold`}>Reviews</p>
                    <p className={`my-5 font-thin`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloribus iste voluptas, nobis ipsa facilis excepturi ratione natus inventore autem rerum. Id odio alias optio natus quaerat fugit commodi ad. <br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor deserunt eligendi unde suscipit animi nisi est laborum ullam doloremque esse quam harum aperiam repellendus eveniet, culpa, voluptatem ratione odit!</p>
                  </div>

                  

                </div>
                <div className={`px-3 py-5 sm:py-0 sm:basis-1/2`}>
                  <p className={`my-5 font-bold sm:hidden`}>Map</p>
                  <div className={`rounded-xl w-full h-[200px] sm:h-[500px] my-5 sm:my-0 sm:mb-5 font-bold bg-gradient-to-r from-teal-200 via-purple-500 to-yellow-300`} ><MapContainer className={`rounded-xl w-full h-[200px] sm:h-[500px] my-5 sm:my-0 sm:mb-5 font-bold bg-gradient-to-r from-teal-200 via-purple-500 to-yellow-300`} lat={mlat} lng={long}/></div>
                  <p>{person.address.street} ,{person.address.suite}, {person.address.city}</p>
                </div>
                </div>
              )
              
          }
        </div>
      </div>
      
    )
  }


}