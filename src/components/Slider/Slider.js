import React, { useRef, useEffect, useState } from 'react'
import { TweenLite, Power3 } from 'gsap'

import leftArrow from '../../images/slider/arrow-left.svg'
import rightArrow from '../../images/slider/arrow-right.svg'

import './Slider.scss'

const testimonials = [
  {
    name: 'Julia Cameron',
    title: 'Creative Director, VISA',
    image: `${require('../../images/slider/image3.jpg')}`,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
  },
  {
    name: 'Mark Jacobs',
    title: 'Tech Lead, Google',
    image: `${require('../../images/slider/image.jpg')}`,
    quote:
      'The rebranding has really helped our business. Definitely worth the investment.',
  },
  {
    name: 'Lisa Bearings',
    title: 'Brand Coordinator, Facebook',
    image: `${require('../../images/slider/image2.jpg')}`,
    quote:
      'The service was excellent. Absolutely wonderful! A complete redesign did it for us.',
  },
]

const Slider = () => {
  const imageList = useRef(null)
  const testimonialList = useRef(null)

  const [activeId, setActiveId] = useState(1)
  const [clickDisabled, setClickDisabled] = useState(false)

  const imageWidth = 170

  // preset slider one over
  useEffect(() => {
    if (imageList && imageList.current) {
      TweenLite.staggerTo(imageList.current.children, 0, {
        x: imageWidth * -1,
      })
      TweenLite.to(testimonialList.current.children[1], 0, {
        opacity: 1,
      })
    }
  }, [])

  useEffect(() => {
    if (clickDisabled) {
      // console.log('click disabled')
      setTimeout(() => {
        setClickDisabled(false)
        // console.log('click enabled')
      }, 1000)
    }
  }, [clickDisabled])

  const slideRight = ({ idx, duration = 1, pos }) => {
    TweenLite.to(imageList.current.children[idx], duration, {
      x: imageWidth * pos,
      ease: Power3.easeOut,
    })
  }

  const slideLeft = (idx, pos, duration = 1) => {
    TweenLite.to(imageList.current.children[idx], duration, {
      x: -imageWidth * pos,
      ease: Power3.easeOut,
    })
  }

  // Function for next & prev slide
  const slide = ({ current, next, forward }) => {
    console.log({ current, next, forward })
    if (forward) {
      console.log('forward')
      if (next === 1) {
        slideLeft(0, 1)
        slideLeft(1, 1)
        slideLeft(2, 1, 0)
      }
      if (next === 2) {
        slideLeft(0, -1, 0)
        slideLeft(1, 2)
        slideLeft(2, 2)
      }
      if (next === 0) {
        slideLeft(0, 0)
        slideLeft(1, 0, 0)
        slideLeft(2, 3)
      }
    } else {
      console.log('backwards')
      if (next === 1) {
        console.log('here')
        slideLeft(0, 1, 0)
        slideLeft(1, 1)
        slideLeft(2, 1)
      }
      if (next === 2) {
        slideLeft(0, -1)
        slideLeft(1, 2, 0)
        slideLeft(2, 2)
      }
      if (next === 0) {
        slideLeft(0, 0)
        slideLeft(1, 0)
        slideLeft(2, 3, 0)
      }
    }
  }

  const zoomImage = (idx) => {
    TweenLite.from(imageList.current.children[idx], 1, {
      scale: 1.2,
      ease: Power3.easeOut,
    })
  }

  const fadeText = ({ current, next }) => {
    TweenLite.to(testimonialList.current.children[current], 1, {
      opacity: 0,
    })
    TweenLite.to(testimonialList.current.children[next], 1, {
      opacity: 1,
      delay: 0.5,
    })
  }

  const navigate = ({ forward = true }) => {
    if (clickDisabled) return
    setClickDisabled(true)

    console.log(forward ? 'next' : 'prev')

    const current = activeId
    let next
    if (forward) {
      next = activeId === testimonials.length - 1 ? 0 : activeId + 1
    } else {
      next = activeId === 0 ? testimonials.length - 1 : activeId - 1
    }
    console.log({ current, next })

    slide({ current, next, forward })

    zoomImage(next)
    fadeText({ current, next })

    setActiveId(next)
  }

  return (
    <div className='testimonial-section'>
      <div className='testimonial-container'>
        <div
          onClick={() => navigate({ forward: false })}
          className='arrows left'
        >
          <span>
            <img src={leftArrow} alt='left arrow' />
          </span>
        </div>

        <div className='inner'>
          <div className='t-image'>
            <ul ref={imageList}>
              {testimonials.map((t, idx) => (
                <li key={idx} className={activeId === idx ? 'active' : ''}>
                  <img src={t.image} alt={t.name} />
                </li>
              ))}
            </ul>
          </div>
          <div className='t-content'>
            <ul ref={testimonialList}>
              {testimonials.map((t, idx) => (
                <li key={idx} className={activeId === idx ? 'active' : ''}>
                  <div className='content-inner'>
                    <p className='quote'>{t.quote}</p>
                    <h3 className='name'>{t.name}</h3>
                    <h4 className='title'>{t.title}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          onClick={() => navigate({ forward: true })}
          className='arrows right'
        >
          <span>
            <img src={rightArrow} alt='right arrow' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Slider
