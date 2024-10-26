import useGames from "@/hooks/useGames";
import GameCard from "../GameCard/GameCard";

import style from "./GameGrid.module.css";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";

const GameGrid = () => {
  const { data, error, loading } = useGames();

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
