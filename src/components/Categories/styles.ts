import styled from 'styled-components'
import { colors } from '../../styles'

type PropsListItem = {
  isActive?: boolean
}

export const CategoriesContainer = styled.div`
  padding: 24px 0;

  .container {
    ul {
      display: flex;
    }
  }
`

export const ListItem = styled.li<PropsListItem>`
  font-size: 18px;
  margin-right: 4px;
  font-weight: 900;
  padding: 8px 24px;
  border: 3px solid
    ${(props) => (props.isActive ? colors.green : 'transparent')};
  transition: ease all 0.5s;

  &.isActive {
    border-color: ${colors.green};
  }

  &:hover {
    cursor: pointer;
    transition: ease all 0.5s;
    border-color: ${(props) => (props.isActive ? colors.green : colors.blue)};
  }
`
