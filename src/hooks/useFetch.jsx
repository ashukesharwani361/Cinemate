import { useState, useEffect } from 'react';

export default function useFetch(apiPath, queryTerm = "") {
    const [data, setData] = useState([]);
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${queryTerm}`;

    useEffect(() => {
        if (!apiKey) {
            console.error("VITE_API_KEY is missing. Please check your .env file.");
            return;
        }
        async function fetchMovies() {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(() => json.results);
            } catch (error) {
                console.log("Error fetching movies:", error);
            }
        }
        fetchMovies();
    }, [url, apiKey]);
    return { data };
}