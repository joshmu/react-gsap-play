import React, { useRef, useEffect, useState } from 'react'
import './App.css'

import { TweenMax, Power3 } from 'gsap'

function App() {
  const app = useRef(null)
  const circle = useRef(null)
  const circleRed = useRef(null)
  const circleBlue = useRef(null)

  const [expanded, setExpanded] = useState(false)

  const handleExpand = () => {
    TweenMax.to(circleRed.current, 0.8, {
      width: expanded ? 75 : 200,
      height: expanded ? 75 : 200,
      ease: Power3.easeOut,
    })
    setExpanded(!expanded)
  }

  useEffect(() => {
    // console.log(circle, circleRed, circleBlue)
    TweenMax.to(app.current, 0, { css: { visibility: 'visible' } })
    // TweenMax.from(circle.current, 0.8, {
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    // })
    // TweenMax.from(circleRed.current, 0.8, {
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.2,
    // })
    // TweenMax.from(circleBlue.current, 0.8, {
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.4,
    // })
    TweenMax.staggerFrom(
      [circle.current, circleRed.current, circleBlue.current],
      0.8,
      { opacity: 1, x: 40, ease: Power3.easeOut },
      0.2
    )
  }, [])

  return (
    <div ref={app} className='App'>
      <header className='App-header'>
        <div className='circle-container'>
          <div ref={circle} className='circle'></div>
          <div
            ref={circleRed}
            onClick={handleExpand}
            className='circle red'
          ></div>
          <div ref={circleBlue} className='circle blue'></div>
        </div>
      </header>
    </div>
  )
}

export default App
