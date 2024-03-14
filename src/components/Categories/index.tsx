import { useState } from 'react'
import * as S from './styles'
import { BikeModels } from '../../pages/Shop'

type Props = {
  categories: BikeModels[]
}

const Categories = ({ categories }: Props) => {
  const [activeCategory, setActiveCategory] = useState('')

  return (
    <S.CategoriesContainer>
      <div className="container">
        <ul>
          {categories.map((category) => (
            <>
              <S.ListItem
                key={category.id}
                onClick={() => setActiveCategory(category.model)}
                isActive={activeCategory === category.model}
              >
                {category.model}
              </S.ListItem>
            </>
          ))}
        </ul>
      </div>
    </S.CategoriesContainer>
  )
}
export default Categories
