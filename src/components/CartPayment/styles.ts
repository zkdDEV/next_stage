import styled from 'styled-components'
import { colors } from '../../styles'

export const CartContainer = styled.div`
  padding: 32px 0;
  background-color: ${colors.gray};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .margin-top {
      margin-top: 4px;
    }
  }
`
export const PaymentInfos = styled.div`
  color: ${colors.darkBlue};
  hr {
    border: 1px solid black;
  }

  h3 {
    color: ${colors.white};
    font-size: 24px;
    font-weight: 900;
  }

  p {
    margin: 8px 0;
    font-size: 18px;
    display: flex;
    justify-content: space-between;

    span {
      color: ${colors.darkGreen};
    }
  }
`

export const CouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;

  label {
    font-weight: bold;
    color: ${colors.darkGreen};
    margin-bottom: 4px;

    span {
      cursor: pointer;
    }
  }

  input {
    padding: 8px 6px;
    border: 2px solid ${colors.blue};
    border-radius: 8px;
    outline: none;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.7);
    width: 100%;

    &:focus {
      border-color: ${colors.green};
    }
  }
`

export const ButtonContainer = styled.div`
  width: 344px;
`
