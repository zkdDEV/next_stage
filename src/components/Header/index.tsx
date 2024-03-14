import { useNavigate } from 'react-router-dom'

import logo from '../../assets/images/next_stage-logo.jpg'
import box from '../../assets/images/box.svg'

import * as S from './styles'

type Props = {
  inStore: 'yes' | 'no'
}

const Header = ({ inStore }: Props) => {
  const navigate = useNavigate()

  return (
    <S.HeaderContainer>
      <div className="container">
        <img onClick={() => navigate('/')} src={logo} alt="Next Stage" />
        {inStore === 'yes' ? (
          <S.InputContainer>
            <input type="text" placeholder="Buscar por nome" />
          </S.InputContainer>
        ) : (
          <nav>
            <S.Links>
              <S.LinkItem to="/shop">E-MTB</S.LinkItem>
              <S.LinkItem to="/shop">MTB</S.LinkItem>
              <S.LinkItem to="/shop">Speed</S.LinkItem>
              <S.LinkItem to="/shop">Urbana</S.LinkItem>
              <S.LinkItem to="/shop">BMX</S.LinkItem>
            </S.Links>
          </nav>
        )}
        <S.CartContainer onClick={() => navigate('/cart')}>
          <p>
            <span>0</span> produto(s) no carrinho
          </p>
          <img src={box} alt="Caixa de itens" />
        </S.CartContainer>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
