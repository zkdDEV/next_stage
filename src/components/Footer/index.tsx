import { HashLink } from 'react-router-hash-link'

import logo from '../../assets/images/next_stage-logo.jpg'
import youtube from '../../assets/images/youtube.svg'
import github from '../../assets/images/github.svg'
import twitch from '../../assets/images/twitch.svg'

import * as S from './styles'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const SecretCoupon = () => {
    alert('Pense em um número de 1 a 4')
    alert('Você pensou em 3, acertei?')
    const name = prompt('Mas enfim, qual é seu nome meu caro?')
    if (name === null) {
      alert('Ok, já que você não quis falar seu nome, vou fazer o que né?')
      alert(
        'Parabéns ganhador anônimo, você conseguiu encontrar o cupom secreto! | CUPOM: NextStage2024'
      )
    } else {
      alert(
        `Parabéns ${name}, você conseguiu encontrar o cupom secreto! | CUPOM: NextStage2024`
      )
    }
  }

  return (
    <S.FooterContainer>
      <div className="container">
        <nav>
          <h4>Categorias:</h4>
          <S.List>
            <li>
              <a href="#">E-MTB</a>
            </li>
            <li>
              <a href="#">MTB</a>
            </li>
            <li>
              <a href="#">Speed</a>
            </li>
            <li>
              <a href="#">Urbana</a>
            </li>
            <li>
              <a href="#">BMX</a>
            </li>
          </S.List>
          <h4 className="margin-top">Links úteis:</h4>
          <S.List>
            <li>
              <HashLink smooth to="/about#about-us">
                Sobre nós
              </HashLink>
            </li>
            <li>
              <p>|</p>
            </li>
            <li>
              <HashLink smooth to="/about#delivery-policy">
                Política de entrega
              </HashLink>
            </li>
            <li>
              <p>|</p>
            </li>
            <li>
              <HashLink smooth to="/about#warranty">
                Garantia
              </HashLink>
            </li>
          </S.List>
        </nav>
        <div>
          <img onClick={SecretCoupon} src={logo} alt="Next Stage" />
          <p>&copy; Copyright Next Stage {currentYear} - Todos os direitos</p>
        </div>
        <S.ListIcons>
          <li>
            <a
              target="_blank"
              href="https://www.twitch.tv/zkdpro"
              rel="noreferrer"
            >
              <img src={twitch} alt="Twitch" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCuXCDvElI6vxpAJsuZEW00A"
              rel="noreferrer"
            >
              <img src={youtube} alt="Youtube" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/zkdDEV"
              rel="noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>
          </li>
        </S.ListIcons>
      </div>
    </S.FooterContainer>
  )
}

export default Footer
