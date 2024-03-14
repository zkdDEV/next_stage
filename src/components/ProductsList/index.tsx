import { BikeModels } from '../../pages/Shop'
import Product from '../Product'
import * as S from './styles'

type Props = {
  items: BikeModels[]
}

const ProductsList = ({ items }: Props) => {
  return (
    <S.Section>
      <div className="container">
        {items.map((item) =>
          item.bikes.map((bike) => (
            <Product
              key={bike.id}
              id={bike.id}
              image={bike.image1}
              name={bike.name}
              price={bike.price}
            />
          ))
        )}
      </div>
    </S.Section>
  )
}

export default ProductsList
