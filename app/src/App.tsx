import { useState } from 'react'
import style from './App.module.css'
import { Food } from './components/Food'
import { Modal } from './components/Modal'
import { useFetch } from './hooks/useFetch'

type Foods = {
  url: string,
  name: string,
  price: number,
  id: string
}

function App() {
  const { data: repositories, isFetch } = useFetch<Foods[]>("food")
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  return (
    <div className={style.app}>
      <h1 className={style.title}>Cardápio digital</h1>

      <button
        onClick={() => { setIsOpenModal(true) }}
        className={style.btn}
      >Adicionar item
      </button>

      {isFetch && <span>Carregando cardapio...</span>}
      <ul className={style.list}>
        {
          repositories?.map(item => {
            return (
              <Food
                id={item.id}
                name={item.name}
                url={item.url}
                price={item.price}
                key={item.id}
              />
            )
          })

        }
      </ul>
      <Modal
        open={isOpenModal}
        close={setIsOpenModal}
      />
    </div>
  )
}

export default App
