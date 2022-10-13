import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axios(url, options);
                setResponse(res.data);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }
        fetchData();
        
    }, [url, options]);
    
    return { response, error, loading };
}

export default useFetch;