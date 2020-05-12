import React from 'react'
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
  return (
    <div className='testimonial-section'>
      <div className='testimonial-container'>
        <div className='arrows left'>
          <span>
            <img src={leftArrow} alt='left arrow' />
          </span>
        </div>

        <div className='inner'>
          <div className='t-image'>
            <ul>
              {testimonials.map((t, idx) => (
                <li key={idx}>
                  <img src={t.image} alt={t.name} />
                </li>
              ))}
            </ul>
          </div>
          <div className='t-content'>
            <ul>
              {testimonials.map((t, idx) => (
                <li key={idx}>
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

        <div className='arrows right'>
          <span>
            <img src={rightArrow} alt='right arrow' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Slider
