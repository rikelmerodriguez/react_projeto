import { Provider } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

import { store } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
<<<<<<< HEAD
        <Header />
=======
        <Header favoritos={[]} />
>>>>>>> 0980893cbf0f3766af827e3a62b2b6d25b0ac76d
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
