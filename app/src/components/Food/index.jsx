import { Link } from 'react-router-dom';
import { api } from '../../utils/api';


export function Food({ url, name, price, id, setDataFood }) {

    function getFoods() {
        api.get("/food")
            .then(result => setDataFood(result.data))
    }

    function deleteFood() {
        api.delete(`/food/${id}`)
            .then(result => {
                //faz uma nova busca dos elementos
                getFoods();
            })
            .catch(err => console.log(err))
    }

    return (
        <li>
            <img src={url} alt={name} style={{ width: "300px" }} />
            <div>
                <h3>{name}</h3>
                <div>
                    <span>R$ {price}</span>
                    <div>
                        <Link to={`/edite/${id}`}>Editar</Link>
                        <button onClick={deleteFood}>Excluir</button>
                    </div>
                </div>
            </div>
        </li>
    )
}