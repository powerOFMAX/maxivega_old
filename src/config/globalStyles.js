import { createGlobalStyle, css } from 'styled-components'
import { maxWidth } from './theme'

const DefaultStyles = css`
  body, section, ul, li, button, a, h1, h2, h3, h4 {
    font-family: "Larsseit", Helvetica, sans-serif;
    border: 0;
    font-size: 100%;
    outline: 0;
    padding: 0;
  }

  body, section, ul, li {
    margin: 0;
    background-color: #ffff;
  }
  
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    color: #111515;
    letter-spacing: -1.45px;
  }
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    color: #111515;
    letter-spacing: -0.8px;
  }
  h4 {
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 46px;
    color: #111515;
    letter-spacing: 0.4px;
  }
  h5 {
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 30px;
    color: #111515;
  }

  ${maxWidth.small`
    h1 {
      font-size: 60px !important;
      line-height: 64px !important;
      letter-spacing: -4px !important;
    }
    h2 {
      font-size: 31px !important;
      line-height: 40px !important;
      letter-spacing: -1px !important;
    }
    h3 {
      font-size: 21px !important;
      line-height: 27px !important;
      letter-spacing: -0.4px !important;
    }
    h4 {
      font-size: 20px !important;
      line-height: 32px !important;
      letter-spacing: 0px !important;
    }
  `}
`

export default createGlobalStyle`
  ${DefaultStyles};
`
