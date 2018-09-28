import { css } from 'styled-components'

export const media = {
  tabletMax: (...args) => css`
    @media (max-width: 899px) {
      ${ css(...args) }
    }
  `,
  phoneMax: (...args) => css`
    @media (max-width: 599px) {
      ${ css(...args) }
    }
  `
}

export function shadow () {
  return `
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16);
  `;
}