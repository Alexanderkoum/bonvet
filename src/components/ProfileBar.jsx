import React from 'react';
import imagePerson1 from '../assets/people04.png';
import logo from '../assets/logo-alt.png';
import { Link } from 'react-router-dom';

const ProfileBar = ({styles}) => {
    return(
        <div className={`w-full p-5 bg-slate-50`}>
            <div className={`flex justify-between items-center w-full`}>
                <div><img className={`h-12`} src={logo} alt="person 1"/></div>
                <div className={` flex justify-center items-center w-12 font-bold text-[20px] text-poppins`}>
                    <p><Link to="/">BONVET.</Link></p>
                </div>
                <div className={`overflow-hidden flex justify-center align-center w-12`} ><img className={` rounded-full aspect-auto shadow-inner-xl`} src={imagePerson1} alt="person 1"/></div>
            </div>
        </div>
    )
}

export default ProfileBar