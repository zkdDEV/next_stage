import styled from 'styled-components'
import banner from '../../assets/images/banner.jpg'
import { colors } from '../../styles'

export const BannerContainer = styled.div`
  height: 100vh;
  background-image: url(${banner});
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 700px;
    margin: 0 auto;
    text-align: center;
    z-index: 1;

    h2 {
      font-size: 40px;
      font-weight: 900;
      color: ${colors.white};
      text-transform: uppercase;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`
