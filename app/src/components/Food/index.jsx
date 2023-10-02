import { Link } from 'react-router-dom'
export function Food({ url, name, price, id }) {
    return (
        <li>
            <img src={url} alt={name} style={{width:"300px"}} />
            <div>
                <h3>{name}</h3>
                <div>
                    <span>R$ {price}</span>
                    <div>
                        <Link to={`/edite/${id}`}>Editar</Link>
                        <button>Excluir</button>
                    </div>
                </div>
            </div>
        </li>
    )
}