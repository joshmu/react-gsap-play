import React from 'react'

import girlImg from '../../images/hero/girl.webp'
import boyImg from '../../images/hero/boy.webp'
import arrow from '../../images/hero/arrow-right.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero-inner'>
          <div className='hero-content'>
            <div className='hero-content-inner'>
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
                  <div className='hero-content-line-inner'>by behaviour.</div>
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
            <div className='hero-images-inner'>
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
