import { api } from '../../utils/api'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function CreateFood() {

    const [url, setUrl] = useState(null);
    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        api.post("/food", { url, name, price })
            .then(result => { console.log(result.status) })
            .catch(err => console.log(err))
            .finally(() => {
                window.alert("Item adicionado com sucesso!")
                //limpar campos
                setName("")
                setUrl("")
                setPrice("")
            })
    }

    return (
        <div>
            <h3>Adicione um item ao cardápio</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Endereço da imagem</label>
                    <input
                        type="text"
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                    />
                </div>
                <div>
                    <label>Nome</label>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div>
                    <label>Preço</label>
                    <input
                        type="number"
                        onChange={(e) => setPrice(parseInt(e.target.value))}
                        value={price}
                    />
                </div>
                <div>
                    <button type="submit">Adicionar</button>
                    <Link to={"/"}>Voltar</Link>
                </div>

            </form>

        </div>
    )
}