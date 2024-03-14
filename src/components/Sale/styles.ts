import styled from 'styled-components'
import { colors } from '../../styles'

export const SaleContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 32px 0;
  }
`
export const ItemOffer = styled.div`
  color: ${colors.white};
  margin-left: 32px;

  h3 {
    font-size: 40px;
  }

  p {
    font-size: 24px;
    margin-top: 40px;
    margin-bottom: 48px;
    span {
      text-decoration: line-through;
    }
  }
`

export const ItemContent = styled.div`
  background-color: ${colors.white};
  color: ${colors.black};
  text-align: center;
  padding: 16px;
  border-radius: 8px;

  img {
    height: 480px;
  }

  h3 {
    font-size: 18px;
  }
`
