import React, { useEffect, useRef, useState } from 'react'
import './Hero.scss'

import { TweenLite, TimelineLite, Power3 } from 'gsap'

// Assets
import girlImg from '../../images/hero/girl.webp'
import boyImg from '../../images/hero/boy.webp'
import arrow from '../../images/hero/arrow-right.svg'

const Hero = () => {
  const app = useRef(null)
  const images = useRef(null)
  const content = useRef(null)
  const [tl] = useState(new TimelineLite({ delay: 0.8 }))

  useEffect(() => {
    // vars
    const girlImage = images.current.firstElementChild
    const boyImage = images.current.lastElementChild

    const headlines = [...content.current.children[0].children]
    const contentP = content.current.children[1]
    const contentButton = content.current.children[2]

    // avoids a flash when animating
    TweenLite.to(app.current, 0, { css: { visibility: 'visible' } })

    // initial state to final state
    tl.from(
      girlImage, // dom element
      1.2, // duration
      {
        y: 1280,
        ease: Power3.easeOut,
      },
      'start' // this keyword can be anything and ties the timelines together
    )
      .from(
        girlImage.firstElementChild,
        2,
        {
          scale: 1.6,
          ease: Power3.easeOut,
        },
        0.2
      )
      .from(
        boyImage,
        1.2,
        {
          y: 1280,
          ease: Power3.easeOut,
        },
        0.2
      )
      .from(
        boyImage.firstElementChild,
        2,
        {
          scale: 1.6,
          ease: Power3.easeOut,
        },
        0.2
      )

    // content animation
    tl.staggerFrom(
      headlines.map((c) => c.children),
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      'start'
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6)
  }, [tl])

  return (
    <div ref={app} className='hero'>
      <div className='container'>
        <div className='hero-inner'>
          <div className='hero-content'>
            <div ref={content} className='hero-content-inner'>
              <h1>
                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>
                    Relieving the burden
                  </div>
                </div>
                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>
                    of disease caused
                  </div>
                </div>
                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>by behaviors.</div>
                </div>
              </h1>
              <p>
                Better treats cardiometabolic diseases to transform lives and
                reduce healthcare utilization through the use of digital
                therapeutics.
              </p>
              <div className='btn-row'>
                <button className='explore-button'>
                  explore
                  <div className='arrow-icon'>
                    <img src={arrow} alt='arrow' />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className='hero-images'>
            <div ref={images} className='hero-images-inner'>
              <div className='hero-image girl'>
                <img src={girlImg} alt='girl' />
              </div>
              <div className='hero-image boy'>
                <img src={boyImg} alt='boy' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
