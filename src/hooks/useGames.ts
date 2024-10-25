import { useEffect, useState } from "react";
import { CanceledError } from "axios";

import apiClient from "@/services/api-client";

import { FetchGamesResponse } from "@/types/FetchGamesResponse";
import { Game } from "@/types/Game";

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get<FetchGamesResponse>(`${import.meta.env.VITE_BACKEND_API_URL}/games`)
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            })
        
        return () => controller.abort();
    }, []);

    return { games, error }
}

export default useGames;