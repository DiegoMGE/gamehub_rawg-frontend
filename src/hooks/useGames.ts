import useData from "./useData";

import { Game, Platform } from "@/types/Game";
import { GenreProps } from "@/types/Genres";

const useGames = (
  selectedGenre: GenreProps | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: {
        genres: selectedGenre?.id, platforms: selectedPlatform?.id
      }
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
