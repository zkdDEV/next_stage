import bike from '../../assets/images/bike1_1.jpg'
import { Button } from '../../styles'
import * as S from './styles'

type Props = {
  id: number
  name: string
  image: string
  price: number
}

const Product = ({ id, name, image, price }: Props) => {
  return (
    <S.Card>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>
          De <span>R$ 5000,00</span> <br />
          para <b>R$ {price}</b>
        </p>
      </div>
      <Button onClick={() => id}>Comprar</Button>
    </S.Card>
  )
}

export default Product
