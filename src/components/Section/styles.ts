import styled from 'styled-components'
import { colors } from '../../styles'

export const SectionContainer = styled.section`
  padding: 32px 0;
  background-color: ${colors.white};

  .container {
    h3 {
      text-align: center;
      font-size: 32px;
      margin-bottom: 16px;
      font-style: italic;
    }
  }
`

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  li {
    position: relative;
    cursor: pointer;
    border-radius: 8px;
    border: 2px solid ${colors.black};
    z-index: 1;

    &:hover {
      &::after {
        position: absolute;
        border-radius: 4px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        content: 'Visualizar';
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${colors.white};
        font-weight: 200;
        font-size: 24px;
        text-transform: uppercase;
      }
    }
    img {
      height: 228px;
      border-radius: 8px;
    }
  }
`
