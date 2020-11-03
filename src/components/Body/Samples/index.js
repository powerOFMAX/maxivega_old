import React from 'react'
import { Element } from 'react-scroll'
import { sample } from '../../../config/info'
import { Wrapper } from './styled'

const { image1, image2, image3, image4, image5, image6 } = sample

export const Samples = () => {
  return (
    <Wrapper>
      <Element name='samples' />
      <div className='samples-title'>
        <h1>Some Samples</h1>
        <h4>
          It’s time to see some work. Here are a few projects I’ve done for clients and experimentation purposes. Not everything, just a sneak peek.
        </h4>
      </div>

      <div className='images-wrapper'>
        <div style={{ width: '70%' }}>
          <img src={image1.src} alt={image1.alt}></img>
        </div>
        <div style={{ width: '70%' }}>
          <img src={image6.src} alt={image6.alt}></img>
        </div>
        <div style={{ width: '40%' }}>
          <img src={image5.src} alt={image5.alt}></img>
        </div>
        <div style={{ width: '55%' }}>
          <img src={image2.src} alt={image2.alt}></img>
        </div>
        <div style={{ width: '55%', maxHeight: '412px' }}>
          <img src={image3.src} alt={image3.alt}></img>
        </div>
        <div style={{ width: '40%' }}>
          <img src={image4.src} alt={image4.alt}></img>
        </div>
      </div>

      <h5 className='see-more'>
        <span>Want to see more?</span>
        <br />
        Check out my <a href='https://github.com/powerOFMAX' target='_blank' rel="noopener noreferrer">Github</a> to see more projects and things I’m currently working on.
      </h5>
    </Wrapper>
  )
}

export default Samples
