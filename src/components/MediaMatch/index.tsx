import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breackPoint = keyof DefaultBreakpoints
export type MediaMatchProps = {
  lessThan?: breackPoint
  greaterThan?: breackPoint
}

const mediaMatchModifiers = {
  lassThan: (size: breackPoint) => css`
    ${media.lessThan(size)`display: block`}
  `,
  greaterThan: (size: breackPoint) => css`
    ${media.greaterThan(size)`display: block`}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lassThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
