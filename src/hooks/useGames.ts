import { useEffect, useState } from "react";
import { CanceledError } from "axios";

import apiClient from "@/services/api-client";

import { FetchGamesResponse } from "@/types/FetchGamesResponse";
import { Game } from "@/types/Game";

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
            .get<FetchGamesResponse>(`${import.meta.env.VITE_BACKEND_API_URL}/games`, {signal: controller.signal})
            .then(res => {
                setGames(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            })
        
        return () => controller.abort();
    }, []);

    return { games, error, loading }
}

export default useGames;