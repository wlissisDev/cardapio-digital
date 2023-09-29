import style from './App.module.css'
import { Food } from './components/Food'
import { useFetch } from './hooks/useFetch'
function App() {

  const {data, isFetch} = useFetch("food")
  console.log(data)
  return (
    <div className={style.app}>
      <h1>Cardapio digital</h1>
      {isFetch && <span>Carregando cardapio...</span>}
      <ul>
        <Food/>
      </ul>
    </div>
  )
}

export default App
