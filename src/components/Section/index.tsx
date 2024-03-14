import bike from '../../assets/images/bike1_1.jpg'
import bike2 from '../../assets/images/bike1_2.jpg'
import * as S from './styles'

const Section = () => {
  return (
    <S.SectionContainer>
      <div className="container">
        <h3>Mais Vendidas</h3>
        <S.List>
          <li>
            <img src={bike} alt="" />
          </li>
          <li>
            <img src={bike2} alt="" />
          </li>
          <li>
            <img src={bike} alt="" />
          </li>
          <li>
            <img src={bike2} alt="" />
          </li>
        </S.List>
      </div>
    </S.SectionContainer>
  )
}

export default Section
