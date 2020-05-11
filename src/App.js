import React, { useEffect, useRef } from 'react'
import './App.css'

import Reveal from './components/Reveal/Reveal'
import { TweenMax } from 'gsap/gsap-core'

function App() {
  const app = useRef(null)

  useEffect(() => {
    TweenMax.to(app.current, 0, { css: { visibility: 'visible' } })
  }, [])

  return (
    <div ref={app} className='App'>
      <header className='App-header'>
        <Reveal />
      </header>
    </div>
  )
}

export default App
