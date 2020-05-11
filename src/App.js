import React, { useRef, useEffect } from 'react'
import './App.css'

import { TweenMax } from 'gsap'

import Circles from './components/Circles/Circles'

function App() {
  const app = useRef(null)

  useEffect(() => {
    TweenMax.to(app.current, 0, { css: { visibility: 'visible' } })
  }, [])

  return (
    <div ref={app} className='App'>
      <header className='App-header'>
        <Circles />
      </header>
    </div>
  )
}

export default App
