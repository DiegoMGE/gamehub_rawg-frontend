import useData from "./useData";

import { Game } from "@/types/Game";
import { GameQuery } from "@/types/GameQuery";

const useGames = (
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    { params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder
      }
    },
    [gameQuery]
  );

export default useGames;
