import useGames from "@/hooks/useGames";
import GameCard from "../GameCard/GameCard";

import style from "./GameGrid.module.css"

const GameGrid = () => {
    const {games, error} = useGames();

  return (
    <>
        {error && <p>{error}</p>}
        <div className={style.cntGamesCard}>
            {
              games.map((game) => (
                <GameCard key={game.id} game={game}/>
              ))
            }
        </div>
    </>
  )
}

export default GameGrid