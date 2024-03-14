import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  padding-top: 16px;
  padding-bottom: 8px;
  box-shadow: 0px 1px 16px;

  img {
    height: 72px;
    cursor: pointer;

    transform: scale(1);
    transition: ease all 0.3s;
    &:hover {
      transform: scale(1.1);
      transition: ease all 0.3s;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const InputContainer = styled.div`
  width: 364px;

  input {
    width: 100%;
    padding: 8px 6px;
    border-radius: 12px;
    border: 2px solid ${colors.blue};
    outline: none;
    font-size: 16px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.8);

    &:focus {
      border-color: ${colors.green};
    }
  }
`

export const Links = styled.ul`
  display: flex;
`
export const LinkItem = styled(Link)`
  margin-right: 24px;
  font-size: 18px;
  font-weight: 900;
  margin-top: 16px;
  padding-bottom: 8px;
  border-bottom: 3px solid transparent;
  transition: ease all 0.5s;
  text-decoration: none;
  color: ${colors.black};

  &:hover {
    cursor: pointer;
    transition: ease all 0.5s;
    border-color: ${colors.blue};
  }
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 24px;
    margin-left: 8px;
    transform: scale(1);
    transition: ease all 0.3s;

    &:hover {
      transform: scale(1.2);
      transition: ease all 0.3s;
    }
  }

  p {
    font-size: 16px;
    font-weight: bold;

    span {
      color: ${colors.blue};
    }
  }
`
