import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  padding: 40px 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      color: ${colors.blue};

      &.margin-top {
        margin-top: 8px;
      }
    }

    div {
      text-align: center;
      img {
        height: 88px;
        margin-bottom: 8px;
        cursor: help;
      }
      p {
        font-size: 16px;
      }
    }
  }
`
export const List = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 4px;

  li {
    margin-right: 8px;
    margin-bottom: 4px;

    a {
      text-decoration: none;
      color: ${colors.black};

      &:hover {
        color: ${colors.green};
      }
    }
  }
`

export const ListIcons = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    margin-right: 16px;
    cursor: pointer;
    text-decoration: none;

    img {
      height: 24px;
      transform: scale(1);
      transition: ease all 0.3s;

      &:hover {
        transform: scale(1.3);
        transition: ease all 0.3s;
      }
    }
  }
`
