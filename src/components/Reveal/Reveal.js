import React, { useRef, useEffect, useState } from 'react'

import './Reveal.scss'
import cliffPhoto from '../../images/cliff.jpg'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { TimelineLite, Power2, CSSPlugin, gsap } from 'gsap'

const Reveal = () => {
  const container = useRef(null)
  const image = useRef(null)

  gsap.registerPlugin(CSSPlugin, CSSRulePlugin)
  const imageReveal = CSSRulePlugin.getRule('.img-container:after')

  const [tl] = useState(new TimelineLite())

  useEffect(() => {
    // always set visibility: 'none' for root elem to avoid animation flash
    // then revert on load
    tl.to(container.current, 1, {
      css: { visibility: 'visible' },
    })
      .to(imageReveal, 1.4, { width: '0%', ease: Power2.easeOut })
      .from(image.current, 1.4, {
        scale: 1.6,
        ease: Power2.easeOut,
        delay: -1.6,
      })
    // eslint-disable-next-line
  }, [])

  return (
    <section className='main'>
      <div ref={container} className='container'>
        <>
          <div className='img-container'>
            <img ref={image} src={cliffPhoto} alt='cliff face' />
          </div>
        </>
      </div>
    </section>
  )
}

export default Reveal
