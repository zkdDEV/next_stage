import { Button } from '../../styles'
import bike from '../../assets/images/bike1_2.jpg'

import * as S from './styles'

const CartContent = () => {
  return (
    <S.CartContainer>
      <div className="container">
        <S.Card>
          <img src={bike} alt="" />
          <Button className="view">Visualizar</Button>
          <Button className="delete margin-top">Remover</Button>
        </S.Card>
      </div>
    </S.CartContainer>
  )
}

export default CartContent
