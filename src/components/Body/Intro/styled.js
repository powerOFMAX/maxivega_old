import styled from 'styled-components'
import { maxWidth } from './../../../config/theme'

export const Wrapper = styled.section`
  margin: 115px auto 145px;
  text-align: center;
  ${maxWidth.small`
    margin: 42px auto 60px;
    padding: 0 20px;
  `};

  .wrapper-logo {
    margin-bottom: 40px;
    .social-links > a {
      padding: 5px;
    }
    .avatar {
      border-radius: 50%;
      height: 150px;
      ${maxWidth.small`
        height: 100px;
      `};
    }
    .name {
      margin: 0;
    }
  }

  .intro-text {
    max-width: 980px;
    margin: 11px auto 28px;
  }

  .dropdown {
    position: relative;
    display: inline-block;
    padding-top: 12px;
  }

  .intro-actions {
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 19px;
  }

  .intro-title {
    max-width: 1100px;
    margin: auto;
    font-size: 118px;
    line-height: 138px;
    letter-spacing: -8px;
  }

  .intro-link {
    cursor: pointer;
    color: ${props => props.theme.colors.orange};
    display: inline-block;
    margin: 0 0 0 26px;
    text-decoration: none;
    span, svg {
      vertical-align: middle;
      padding-left: 5px;
    }

    ${maxWidth.small`
      margin: 40px 0 0 0;
    `};
  }
`