import { useFetch } from '../../hooks/useFetch'
import { api } from '../../utils/api'
import style from './style.module.css'

type Food = {
    url: string,
    name: string,
    price: number,
    id: string
}

function deleteFood(id: string) {
    api.delete(`/food/${id}`)
        .then(result => { console.log(result.status) })
        .catch(err => { console.log(err) })

    window.location.reload()
}

export function Food(props: Food) {
    return (
        <li className={style.food}>
            <img src={props.url} alt="" />
            <h3>{props.name}</h3>
            <div className={style.btns}>
                <span>R$ {props.price}</span>
                <div>
                    <button>Editar</button>
                    <button onClick={() => deleteFood(props.id)}>Excluir</button>
                </div>
            </div>
        </li>
    )
}