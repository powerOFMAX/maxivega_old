import React from 'react'
import { Button, Linkedin, Medium, Github, Arrow } from '../../commons'
import { scroller } from 'react-scroll'
import { data } from '../../../config/info'
import { Wrapper } from './styled'

const { email, name, imageUrl, github, linkedin, medium } = data

function scrollTo(element) {
  scroller.scrollTo(element, {
    duration: 1000,
    delay: 100,
    smooth: true,
    offset: -20
  })
}

export const Intro = () => {
  return (
    <Wrapper>
      <div className="wrapper-logo">
        <img className="avatar"
          src={imageUrl} alt='name-img'
        />
        <h4 className="name">{name}</h4>
        <div className='social-links'>
          <a href={github} target='_blank' rel="noopener noreferrer">
            <Github fill='#4c4949' />
          </a>
          <a href={medium} target='_blank' rel="noopener noreferrer">
            <Medium fill='#4c4949' />
          </a>
          <a href={linkedin} target='_blank' rel="noopener noreferrer">
            <Linkedin fill='#4c4949' />
          </a>
        </div>
      </div>
      <h1 className="intro-title">Software Engineer</h1>
      <h4 className="intro-text">I help companies &amp; individuals to turn their ideas into great software. Always looking for agile development. Language enthusiast. <span role="img" aria-label=
        'flags'>🇦🇷🇩🇪🇺🇸🇬🇧🇮🇹🇯🇵🇵🇱</span></h4>
      <div className="intro-actions">
        <div className="dropdown hide-mobile">
          <Button isLink className="button" href={email} label='Send me a message' />
        </div>
        <span className="intro-link" onClick={() => scrollTo('samples')}>
          <Arrow />
          <span className="link">See some samples</span>
        </span>
      </div>
    </Wrapper>
  )
}

export default Intro
