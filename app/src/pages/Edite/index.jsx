import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../utils/api";
import { Link, useNavigate } from "react-router-dom";

export function EditeFood() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");


    useEffect(() => {
        api.get(`/food/${id}`)
            .then(result => {
                setName(result.data.name);
                setUrl(result.data.url);
                setPrice(result.data.price);
            })

    }, [])

    function handlerSubmit(e) {
        e.preventDefault();

        api.put(`/food/${id}`, { url, name, price })
            .then(result => {
                alert(`O Item ${name} foi editado com successo!`)
                navigate("/");
            })
            .catch(err => { console.error(err) })
            
    }

    return (
        <div>
            <h3>Editar { }</h3>
            <form onSubmit={handlerSubmit} >
                <div>
                    <label>Endereço da imagem</label>
                    <input
                        type="text"
                        required
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                    />
                </div>
                <div>
                    <label>Nome</label>
                    <input
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div>
                    <label>Preço</label>
                    <input
                        type="number"
                        required
                        onChange={(e) => setPrice(parseInt(e.target.value))}
                        value={price}
                    />
                </div>
                <div>
                    <button type="submit">Confirmar</button>
                    <Link to={"/"}>Voltar</Link>
                </div>

            </form>
        </div>
    )
}