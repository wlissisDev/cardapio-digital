import { Food } from '../../components/Food'
import { api } from '../../utils/api'
import { useEffect, useState } from 'react'

import {Link} from 'react-router-dom'
export function Foods() {

    const [dataFood, setDataFood] = useState();
    const [error, setError] = useState();
    const [isFetch, setIsFetch] = useState(true);

    useEffect(() => {
        api.get("/food")
            .then(result => {
                console.log(result.data)
                setDataFood(result.data)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setIsFetch(false)
            })
    }, [])

    return (
        <div>
            <h1>Cardápio digital <Link to={"/create"}>+</Link></h1>
                {isFetch && <span>Carregando dados...</span>}
                {error && <span>Ops! Dados não encontrado. Recarregue a página e tente novamente.</span>}
            <ul style={{display:"flex", flexWrap:"wrap"}}>
                {dataFood?.map(item=>{
                    return(
                        <div key={item.id}>
                            <Food
                                id={item.id}
                                url={item.url}
                                name={item.name}
                                price={item.price}
                            />
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}