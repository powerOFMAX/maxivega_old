import { css } from 'styled-components'

export const theme = {
  colors: {
    orange: '#f5c15d',
    grey: '#f3f3f1',
    borderGrey: '#e6e8e9'
  }
}

const breakpoints = {
  small: 768,
  medium: 1024,
  large: 1280,
  xlarge: 1400
}

// Iterate through the sizes and create a media template
export const maxWidth = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label] - 1}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})
