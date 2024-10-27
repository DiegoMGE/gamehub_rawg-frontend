import useData from "./useData";

import { Game } from "@/types/Game";
import { GenreProps } from "@/types/Genres";

const useGames = (selectedGenre: GenreProps | null) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id } },
    [selectedGenre?.id]
  );

export default useGames;
