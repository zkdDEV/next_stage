import { useNavigate } from 'react-router-dom'
import { Button } from '../../styles'
import * as S from './styles'

const CartPayment = () => {
  const navigate = useNavigate()

  return (
    <S.CartContainer>
      <div className="container">
        <S.PaymentInfos>
          <h3>Finalizar pagamento?</h3>
          <p>
            Produtos: <span>R$ 25.500,00</span>
          </p>
          <p>
            Frete: <span>R$ 500,00</span>
          </p>
          <hr />
          <p>
            Total: <span>R$ 26.000,00</span>
          </p>
        </S.PaymentInfos>
        <S.CouponContainer>
          <label htmlFor="">
            <span onClick={() => navigate('/about')}>Cupom</span> de desconto:
          </label>
          <input type="text" placeholder="Achou o cupom escondido?" disabled />
        </S.CouponContainer>
        <S.ButtonContainer>
          <Button>Finalizar</Button>
          <Button className="view margin-top">Ver mais itens</Button>
        </S.ButtonContainer>
      </div>
    </S.CartContainer>
  )
}

export default CartPayment
