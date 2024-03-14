import bike1 from '../../assets/images/bike1_1.jpg'
import bike2 from '../../assets/images/bike1_2.jpg'
import { Button } from '../../styles'

import * as S from './styles'

const ProductDisplay = () => {
  return (
    <S.ProductContainer>
      <div className="container">
        <S.ImageContainer>
          <img src={bike1} alt="" />
          <img src={bike2} alt="" />
        </S.ImageContainer>
        <S.Infos>
          <h2>Bicicleta Exalt E-Trail Evo</h2>
          <S.Description>
            A Exalt e-Trail Evo, uma bicicleta assistida concebida para se
            assemelhar ao máximo ao comportamento de uma MTB convencional,
            entrega a possibilidade de pedalar mais trilhas e explorar novos e
            variados terrenos.
          </S.Description>
          <S.Price>
            De <span>R$ 5,000,00</span> <br />
            Para <strong>R$ 3.750,00</strong>
          </S.Price>
          <Button className="end" type="button">
            Adicionar ao Carrinho
          </Button>
        </S.Infos>
      </div>
    </S.ProductContainer>
  )
}

export default ProductDisplay
