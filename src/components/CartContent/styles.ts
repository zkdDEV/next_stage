import styled from 'styled-components'
import { colors } from '../../styles'

export const CartContainer = styled.div`
  padding: 32px;
  background-color: ${colors.lightGray};

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 32px;
  }
`

export const Card = styled.div`
  padding: 16px;
  border-radius: 8px;
  background-color: ${colors.white};

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  .margin-top {
    margin-top: 4px;
  }
`
