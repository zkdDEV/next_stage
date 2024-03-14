import styled from 'styled-components'
import { colors } from '../../styles'

export const Section = styled.section`
  padding: 32px;
  background-color: ${colors.lightGray};

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 32px;
  }
`
