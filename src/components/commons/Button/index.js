import React from 'react'
import styled, { css } from 'styled-components'

export const Button = ({ isLink, onClick, href, label, className }) => {

  if (isLink) return <Link onClick={onClick} className={className || 'link'} href={`mailto:${href}`}>{label}</Link>

  return <ButtonWrapper onClick={onClick} className={className || 'button'}>{label}</ButtonWrapper>
}


const commonStyle = css`
  color: #fff;
  padding: 24px 48px 23px;
  background-color: ${props => props.theme.colors.orange};
  display: inline-block;
  vertical-align: middle;
  border-radius: 50px;
  box-shadow: 0px 23px 28px -24px #d48f09a6;
  transition: all 0.2s ease;
`
const ButtonWrapper = styled.button`
  ${commonStyle};
`
const Link = styled.a`
 ${commonStyle};
 text-decoration: none;
`


export default Button
