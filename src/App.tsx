import { BrowserRouter } from 'react-router-dom'

import RoutesList from './routes'
import GlobalStyle from './styles'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesList />
      <Footer />
    </BrowserRouter>
  )
}

export default App
