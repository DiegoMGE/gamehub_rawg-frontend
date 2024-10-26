import { useEffect, useState } from "react";
import { CanceledError } from "axios";

import apiClient from "@/services/api-client";

interface GenreProps {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    counter: number;
    results: GenreProps[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<GenreProps[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenresResponse>(
        `${import.meta.env.VITE_BACKEND_API_URL}/genres`,
        { signal: controller.signal }
      )
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, loading };
};

export default useGenres;
