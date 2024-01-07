import {useEffect, useState} from "react";

const useFetch = (url) => {
    const abort = new AbortController();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            fetch(url, {signal: abort.signal}).then((res) => {
                if (!res.ok) {
                    throw Error("Couldn't Fetch Data :(")
                }
                return res.json();
            }).then((data) => {
                setData(data);
                setIsLoading(false)
            }).catch(err => {
                setIsLoading(false)
                setError(err.message)
            })
        }, 1000)
        return () => abort.abort();
    }, [url]);
    return {data, isLoading, error}
}

export default useFetch;
