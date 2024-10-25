import { Game } from "@/types/Game"
import { Button, Card } from "react-bootstrap"

import style from "./GameCard.module.css"

interface GameCardProps {
    game: Game,
}

const GameCard = ({game}: GameCardProps) => {
  return (
    <Card className={style.cntCard}>
        <Card.Img variant="top" src={game.background_image} />
        <Card.Body>
            <Card.Title>{game.name}</Card.Title>
            <Button variant="primary">More info...</Button>
        </Card.Body>
    </Card>
  )
}

export default GameCard