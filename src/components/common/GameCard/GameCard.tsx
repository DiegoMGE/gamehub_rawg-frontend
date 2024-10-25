import { Game } from "@/types/Game";
import { Button, Card } from "react-bootstrap";

import style from "./GameCard.module.css";
import PlatformIconList from "@/components/PlatformIconList";
import CriticScore from "../CriticScore/CriticScore";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className={style.cntCard}>
      <Card.Img variant="top" src={game.background_image} />
      <Card.Body className={style.cntCardBody}>
        <Card.Title>{game.name}</Card.Title>
        <Button variant="primary">More info...</Button>
        <div className={style.cntIcons_Rating}>
          <PlatformIconList
            platforms={game.parent_platforms.map((icon) => icon.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
