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

          <h2 className='Steps'>Step 1 of 2: &nbsp; </h2>
          <h2 className='text'> Watch Video</h2>

        </div>

        <div className='divs1'>

          <ReactPlayer url='https://www.youtube.com/watch?v=_w4sPyiNdBY' className='react-player' />
        </div>
        <div style={{ marginTop: '10%' }}>

          <h2 className='Steps'>Step 2 of 2: &nbsp; </h2>
          <h2 className='text'> Complete Mastermind Application</h2>

        </div>
        <div className='divs2'>

          <p style={{ color: 'white' }}>*Your answers will remain completely confidential</p>
          <InlineWidget url="https://calendly.com/lasociedad-ac/demo-call"   />
        </div>

      </div>

    </>
  )
}

export default App
