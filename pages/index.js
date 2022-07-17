import React from 'react'
import ChatIcon from '../components/ChatIcon'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ScrollSpy from '../components/ScrollSpy'
import SectionFive from '../components/SectionFive'
import SectionFour from '../components/SectionFour'
import SectionOne from '../components/SectionOne'
import SectionSeven from '../components/SectionSeven'
import SectionSix from '../components/SectionSix'
import SectionThree from '../components/SectionThree'
import SectionTow from '../components/SectionTow'
import Slider from '../components/Slider'
import Head from '../head'



function Main() {
  return (
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example flex-1 h-screen overflow-scroll" tabIndex="0">
        <Head/>
        <Header/>
        <SectionOne/>
        <SectionTow/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
        <Slider/>
        <SectionSeven/>
        <Footer/>
        <ChatIcon/>
        <ScrollSpy/>
        
        
    </div>
  )
}

export default Main