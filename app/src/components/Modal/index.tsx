import { useFetch } from '../../hooks/useFetch'
import { api } from '../../utils/api'
import styles from './styles.module.css'
import { FormEvent, useState } from 'react'

type Modal = {
    open: boolean
    close: (x: boolean) => void
}
export function Modal(modal: Modal) {
    const [name, setName] = useState<string | null>(null)
    const [url, setUrl] = useState<string | null>(null)
    const [price, setPrice] = useState<number | null>(null)

    function handleSubmit() {
        api.post("/food", { name, url, price })
            .then(result => { console.log(result.status) })
            .catch(err => { console.log(err) })
    }

    return (
        <div className={styles.modal} style={{ display: modal.open ? "flex" : "none" }}>
            <form className={styles.form} onSubmit={handleSubmit}>

                <div className={styles.input}>
                    <label >Nome do produto</label>
                    <input
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className={styles.input}>
                    <label >Link da imagem</label>
                    <input
                        type="text"
                        onChange={e => setUrl(e.target.value)} />
                </div>

                <div className={styles.input}>
                    <label >Preço</label>
                    <input
                        type="number"
                        onChange={e => setPrice(parseInt(e.target.value))} />
                </div>
                <button className={styles.add}  type='submit'>Adicionar</button>
            </form>
            <button className={styles.cancel}  onClick={() => modal.close(false)}>Cancelar</button>
        </div>
    )
}