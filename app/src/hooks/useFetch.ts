import { useState, useEffect } from "react"
import { api } from "../utils/api";

export function useFetch<T = unknown>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [isFetch, setIsFetch] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        api.get(url)
            .then(response => {
                setData(response.data);
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setIsFetch(false);
            })
    }, [])

    return { data, isFetch, error }

}