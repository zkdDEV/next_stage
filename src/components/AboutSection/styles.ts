import styled from 'styled-components'
import { colors } from '../../styles'

export const AboutContainer = styled.div`
  background-color: ${colors.lightGray};

  .container {
    padding: 8px 80px;

    background-color: ${colors.white};
  }
`

export const Content = styled.div`
  h2 {
    font-size: 32px;
    margin-bottom: 16px;
    color: ${colors.darkGreen};
  }

  h3 {
    color: ${colors.darkBlue};
    font-size: 20px;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  p {
    line-height: 24px;
    font-size: 18px;
  }
  ul {
    padding-left: 24px;
    li {
      list-style: decimal;
      padding-bottom: 8px;
    }
  }
`
