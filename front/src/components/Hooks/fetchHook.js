import { useState, useEffect } from "react";
import axios from "axios";



export const useFetch = (url, initialValue) => {
    const [contacts, setContacts] = useState(initialValue);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url);
            setContacts(result.data.contact);
        };
        fetchData();
        
    }, []);
    return { contacts, setContacts }
}