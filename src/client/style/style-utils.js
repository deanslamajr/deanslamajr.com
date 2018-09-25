import { css } from 'styled-components'

export const media = {
  tabletMax: (...args) => css`
    @media (max-width: 899px) {
      ${ css(...args) }
    }
  `
}