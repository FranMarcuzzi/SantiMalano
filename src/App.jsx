import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { InlineWidget } from "react-calendly";
import ReactPlayer from 'react-player/lazy'
import Header from './components/Header';
import Footer from './components/Foote';
import './App.css'

function App() {
  return (
    <>
      <div className='Header'>

        <Header />
      </div>

      <div className='Body'>
        <div className='marginTitle'>

          <h2 className='Steps'>Paso 1 de 2: &nbsp; </h2>
          <h2 className='text'> Mira el Video</h2>

        </div>

        <div className='divs1'>

          <ReactPlayer url='https://www.youtube.com/watch?v=igvo4-Wx9WQ' className='react-player' />
        </div>
        <div style={{ marginTop: '10%' }}>

          <h2 className='Steps'>Paso 2 de 2: &nbsp; </h2>
          <h2 className='text'> Completa la Solicitud</h2>

        </div>
        <div className='divs2'>

          <p style={{ color: 'white' }}>*Tus respuestas son completamente confidenciales</p>
          <InlineWidget url="https://calendly.com/lasociedad-ac/demo-call"   />
        </div>

      </div>

    </>
  )
}

export default App
