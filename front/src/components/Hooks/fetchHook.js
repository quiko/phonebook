import { useState, useEffect } from "react";
import axios from "axios";



export const useFetch = (url, initialValue) => {
    const [result, setResult] = useState(initialValue);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url);
            setResult(result.data.contact);
        };
        fetchData();
        
    }, []);
    return result
}