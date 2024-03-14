import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#000',
  white: '#fff',
  blue: '#00a8ff',
  darkBlue: '#2980b9',
  green: '#2ecc71',
  darkGreen: '#26A65C',
  lightGray: '#dcdde1',
  gray: '#bdc3c7',
  red: '#e74c3c',
  darkRed: '#c0392b'
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
    /* font-family: "Roboto Mono", monospace; */
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Button = styled.button`
  border: none;
  background-color: ${colors.green};
  padding: 8px 0;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.white};
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  transition: ease all 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
    transition: ease all 0.2s;
    background-color: ${colors.darkGreen};
  }

  &.view {
    background-color: ${colors.blue};

    &:hover {
      background-color: ${colors.darkBlue};
    }
  }

  &.delete {
    background-color: ${colors.red};

    &:hover {
      background-color: ${colors.darkRed};
    }
  }
`

export default GlobalStyle
