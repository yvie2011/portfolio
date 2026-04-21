import React from 'react'
import './App.css'
import HeaderComp from './components/HeaderComp'
import Propos from './components/Propos'
import Formation from './components/Formation'
import Experiences from './components/Experiences'
import FooterComp from './components/FooterComp'
import Competences from './components/Competences'

const App = () => {
  return (

    <div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className='main'>
        <HeaderComp/>
        <Propos/>
        <Competences/>
        <Formation/>
        <Experiences/>
        <FooterComp/>
      </div>
    </div>

  )
}

export default App
