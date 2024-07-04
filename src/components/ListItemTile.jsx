import React from 'react';
import mapicon from '../assets/place.png';

const ListItemTile = ({styles,name,id,street,suite,city,email,companyName,profilePicture}) => {
  return (
      
            <div className={` grid-flow-col-dense text-black bg-slate-50 rounded-xl my-4 grid gap-0 grid-cols-12 sm:inline-block sm:m-3 sm:w-[22.5vw] sm:hover:bg-slate-100 sm:duration-300 key={person.id}`}>
                        <div className={`p-3 col-span-3 flex align-center w-32 h-32`}><img src={profilePicture} alt="person 1"/></div>
                        <div className={`py-3 px-5 text-poppins col-span-7 text-[12px]`}>
                        <h2 className={`uppercase font-bold text-[16px]`}>{name}</h2>
                        <p>{street}, {suite}, {city}</p>
                        <p>{email}</p>
                        <p>{companyName}</p>
                        <p className='py-1 px-2 w-14 rounded-lg text-black bg-yellow-300 mt-2 flex justify-center font-bold'>50$/hr</p>
                        </div>
                        <div className={`py-3 px-5 text-poppins col-span-1 text-[12px] flex flex-col justify-between sm:flex-row`}>
                        <p className='py-1 px-2 w-12 rounded-lg text-white bg-green-900 flex justify-center font-bold'>4.7</p>
  <p className='py-1 px-2 w-12 rounded-lg text-black  flex justify-center font-bold'><img src={mapicon} alt="map icon"  /> 12km</p>
                        </div>
                  </div>
                  
  )
}

export default ListItemTile