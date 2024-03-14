import * as S from './styles'
import bannerSale from '../../assets/images/hero_background.jpg'
import bike from '../../assets/images/bike1_1.jpg'
import { Button } from '../../styles'

const Sale = () => {
  return (
    <S.SaleContainer style={{ backgroundImage: `url(${bannerSale})` }}>
      <div className="container">
        <S.ItemOffer>
          <h3>Oferta do Momento</h3>
          <p>
            De{' '}
            <span>
              <b>R$ 20.000,00</b>
            </span>{' '}
            <br />
            para <b>R$ 12.999,99</b>
          </p>
          <Button>Aproveitar</Button>
        </S.ItemOffer>
        <S.ItemContent>
          <img src={bike} alt="" />
          <h3>Bicicleta Exalt E-Trail Comp</h3>
        </S.ItemContent>
      </div>
      <div className="overlay"></div>
    </S.SaleContainer>
  )
}
export default Sale
