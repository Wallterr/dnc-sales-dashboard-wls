import styled from 'styled-components'
import { TypographiesProps } from '@/types'
import { pxToRem } from '@/utils'

export const StyledH1 = styled.h1<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 24)};
  lineheight: ${(props) => pxToRem(props.lineheight || 36)};
  font-weight: ${(props) => pxToRem(props.weight || 600)};
  letter-spacing: ${pxToRem(-1)};
`
export const StyledH2 = styled.h2<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  lineheight: ${(props) => pxToRem(props.lineheight || 36)};
  font-weight: ${(props) => pxToRem(props.weight || 600)};
`
export const StyledP = styled.p<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  lineheight: ${(props) => pxToRem(props.lineheight || 36)};
  font-weight: ${(props) => pxToRem(props.weight || 400)};
`
export const StyledSpan = styled.span<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  lineheight: ${(props) => pxToRem(props.lineheight || 36)};
  font-weight: ${(props) => pxToRem(props.weight || 400)};
`
export const StyledUl = styled.ul<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  lineheight: ${(props) => pxToRem(props.lineheight || 36)};
  font-weight: ${(props) => pxToRem(props.weight || 400)};
  list-style-position: inside;
  li {
    list-style-position: outside;
    margin-left: ${pxToRem(15)};
  }
`
