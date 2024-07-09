import React from 'react'
import phonemockup from '../assets/phonemockup.png'
const CtaInfolettre = () => {
  return (
    <section className="py-48">
      <div className="w-3/4 mx-auto rounded-xl bg-green-950 px-12 py-24 relative">
          <div className='text-decription'>
              <h2 className="text-white text-6xl font-bold w-full md:w-1/2 pb-24" >Registrer to be notified when the app Goes live !</h2>
              <div>
                  <form action="" method="post" className='p-2 rounded-full bg-slate-50/25 w-full md:w-1/2 flex justify-between'>
                      <label>
                          <input type="email" placeholder='email@provider.com' className="w-[400px] py-6 rounded-full px-12 placeholder-shown:border-gray-500 valid:border-green-500 invalid:border-red-500"/>
                        </label>
                        <input type="button" value="send" className='py-6 rounded-full w-[150px] bg-amber-400 hover:bg-amber-500 text-white' />
                  </form>
              </div>
          </div>
          <div className='image md:absolute bottom-0 -right-20 '>
              <img src={phonemockup} alt="phone mockup image" width='800' height='800'/>
          </div>
          <div></div>
      </div>
    </section>
  )
}

export default CtaInfolettre