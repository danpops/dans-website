import styled from 'styled-components'
import { colors } from '@/design/colors'
import { fonts } from '@/design/fonts'
import { borderStyle } from '@/design/global'

export const FooterBannerWrapper = styled.div`
  position: fixed;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  bottom: 0;
  background-color: ${colors.yellow};
  color: ${colors.blue};
  font-size: ${fonts.sm};
  font-weight: 700;
  ${borderStyle}
  width: 100%;
`
