import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductContainer = styled.div`
  padding: 32px 0;
  background-color: ${colors.lightGray};

  .container {
    display: flex;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  padding: 8px;
  border-radius: 12px;
  background-color: ${colors.white};

  img {
    height: 424px;
  }
`

export const Infos = styled.div`
  margin-left: 32px;
  padding: 16px;
  width: 276px;
  background-color: ${colors.white};
  border-radius: 12px;

  position: relative;

  .end {
    position: absolute;
    right: 16px;
    bottom: 16px;
    width: 244px;
  }
`

export const Description = styled.p`
  font-style: italic;
  font-size: 18px;
  padding: 16px 0;
`

export const Price = styled.p`
  font-size: 18px;
  font-weight: 400;

  span {
    font-weight: bold;
    text-decoration: line-through;
  }
`
