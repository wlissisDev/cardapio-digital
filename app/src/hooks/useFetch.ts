import { useState, useEffect } from "react"
import { api } from "../utils/api";

export function useFetch<T>(url: string) {
    const [isFetch, setIsFetch] = useState<boolean>(true);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        api.get(url)
            .then(response => {
                setData(response.data);
            })
            .catch(err=>{
                setError(err);
            })
            .finally(() => {
                setIsFetch(false);
            })
    }, [])

    return { data, isFetch }

}