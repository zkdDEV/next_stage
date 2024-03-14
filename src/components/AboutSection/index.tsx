import * as S from './styles'

type Props = {
  title: string
  children: JSX.Element
  id: string
}

const AboutSection = ({ title, children, id }: Props) => {
  return (
    <S.AboutContainer id={id}>
      <div className="container">
        <S.Content>
          <h2>{title}</h2>
          {children}
        </S.Content>
      </div>
    </S.AboutContainer>
  )
}

export default AboutSection
