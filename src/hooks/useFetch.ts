import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_MOVIEDB_JWT_TOKEN}`,
        "accept": "application/json"
    }
})

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const response = await api.get(url, options);
                setData(response.data.results);
            } catch(error) {
                // setError(error);
            } finally {
                setIsFetching(false);
            }
        }

        // setTimeout(() => {
        loadData()
        // }, 2000)
  }, []);

  return { data, isFetching };
}
