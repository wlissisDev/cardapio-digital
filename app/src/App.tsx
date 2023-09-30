import style from './App.module.css'
import { Food } from './components/Food'
import { useFetch } from './hooks/useFetch'

type Foods = {
  url: string,
  name: string,
  price: number,
  id: string

}

function App() {
  const { data: repositories, isFetch } = useFetch<Foods[]>("food")

  return (
    <div className={style.app}>
      <h1 className={style.title}>Cardápio digital</h1>
      <button className={style.btn}>Adicionar item</button>

      {isFetch && <span>Carregando cardapio...</span>}
      <ul className={style.list}>
        {
          repositories?.map(item => {
            return (
              <Food name={item.name} url={item.url} price={item.price} key={item.id} />
            )
          })

        }
      </ul>
    </div>
  )
}

export default App
