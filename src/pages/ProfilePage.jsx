import React from 'react';
import PersonList from '../components/PersonList';
import SinglePerson from '../components/SinglePerson';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const location = useLocation()
  const { from } = location.state;
  const { lat } = location.state;
  const { long } = location.state;
  return (
    <div>
    <SinglePerson id={from} lat={lat} lng={long}/>
    </div>
  )
}

export default ProfilePage