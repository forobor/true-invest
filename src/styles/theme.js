import { css } from 'styled-components'

export const colors = {
    black: '#000000',
    white: '#ffffff',
    blue: '#005DCC',
    gray: '#b7b7b7',
    blue_trans: 'rgba(111, 169, 175, 0.4)',
    light_gray:'#D4D6D7'
}

export const fonts = {
    large: '3vmax',
    med: '1vmax',
    small: '0.5vmax'
}

export const pixelFonts = {
    large: '36px',
    xmed: '30px',
    med: '24px',
    normal: '18px',
    xsmall: '16px',    
    small: '14px'
}

const sizes = {
    desktop: 1063,
    tablet: 1024,
    phone: 414
  }
  
  // Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
  
    return acc
  }, {})