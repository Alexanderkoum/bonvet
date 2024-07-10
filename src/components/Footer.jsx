import React from "react";
import Logo from "./Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'


const Footer = () => {
  return (
    <section className="bg-zinc-100 pt-24 pb-12">
      <div className="w-3/4 mx-auto">
        <div>
          <Logo />
        </div>
        <div className="flex justify-between items-start py-12">
          <div className='flex justify-center w-1/3 items-start gap-12'>
            <div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim itaque eum ad doloremque eveniet dolore in iste libero eos rerum accusantium similique consequuntur architecto commodi vel, tempora repudiandae! In, recusandae.</p>
            </div>
          </div>
          <div>
            <div className='flex justify-center items-center gap-6 text-3xl'>
            <FontAwesomeIcon icon={faEnvelope} />
            <img src={twitter} alt="twitter icon" width='24' height='24'/>
            <img src={instagram} alt="instagram icon" width='24' height='24'/>
            <img src={linkedin} alt="linkedin icon" width='24' height='24'/>
              
            </div>
          </div>
        </div>
        <div>
          <div className="text-center">Developé par <a href="alexanderkoum.com">Alexander koum.</a> </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
