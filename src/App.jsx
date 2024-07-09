import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Process from '../src/components/Process'
import Features from '../src/components/Features'
import CtaInfolettre from './components/CtaInfolettre'
import Footer from './components/Footer'
import Advantages from './components/Advantages'
import Banner from './components/Banner'
import Setup from './components/Setup'
import Teams from './components/Teams'


function App() {
  return(
    <div className='backgroundpattern'>
    <Header/>
    <Hero/>
    <Banner/>
    <Features/>
    <Setup/>
    <Advantages/>
    <CtaInfolettre/>
    <Teams/>
    <Footer/>
    test page
    </div>
  )
}

export default App
