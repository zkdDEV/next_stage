import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  padding: 16px;
  border-radius: 8px;
  background-color: ${colors.white};

  div {
    padding-bottom: 16px;

    h3 {
      font-size: 18px;
      margin-bottom: 4px;
    }
    span {
      text-decoration: line-through;
    }
  }

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
`
