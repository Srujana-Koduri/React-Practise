import axios from 'axios';
import { useState, useEffect } from 'react';

function useFetch(url){
    const fullURL = "http://localhost:8080"+url;

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadData = () =>{
        axios.get(fullURL)
            .then(res=>{
                setData(res.data)
                setLoading(false);
            })
            .catch(err=>{
                setError(err);
                setLoading(false);
            })
    }

    useEffect(()=>{
        setTimeout(loadData,200);
    }, []);

    return {data, loading, error}
}
export default useFetch;