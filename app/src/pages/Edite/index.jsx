import { useParams } from "react-router-dom"

export function EditeFood(){
    const {id} =useParams()
    return(
        <div>Edite: {id}</div>
    )
}