import React, { useRef, useEffect, useState } from 'react'
import './Circles.css'

import { TweenMax, Power3 } from 'gsap'

const Circles = () => {
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
    // TweenMax.from(circle.current, 0.8, {
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    // })
    TweenMax.staggerFrom(
      [circle.current, circleRed.current, circleBlue.current],
      0.8,
      { opacity: 1, x: 40, ease: Power3.easeOut },
      0.2
    )
  }, [])

  return (
    <div className='circle-container'>
      <div ref={circle} className='circle'></div>
      <div ref={circleRed} onClick={handleExpand} className='circle red'></div>
      <div ref={circleBlue} className='circle blue'></div>
    </div>
  )
}

export default Circles
