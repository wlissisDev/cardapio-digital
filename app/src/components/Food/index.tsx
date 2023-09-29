import style from './style.module.css'

type Food = {
    url: string,
    name: string,
    price: number
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
                    <button>Excluir</button>
                </div>
            </div>
        </li>
    )
}