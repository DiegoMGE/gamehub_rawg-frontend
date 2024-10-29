import useGames from "@/hooks/useGames";
import GameCard from "../GameCard/GameCard";

import style from "./GameGrid.module.css";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import { GenreProps } from "@/types/Genres";
import { Platform } from "@/types/Game";

interface GameGridProps {
  selectedGenre: GenreProps | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: GameGridProps) => {
  const { data, error, loading } = useGames(selectedGenre, selectedPlatform);

  const skeletons = [1,2,3,4,5,6];

  return (
    <>
      {error && <p>{error}</p>}
      <div className={style.cntGamesCard}>
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton}/>
          )
        )}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
