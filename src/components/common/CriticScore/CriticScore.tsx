import { Badge } from "react-bootstrap";

interface Props {
    score: number;
}

const CriticScore = ({score}: Props) => {
    let color = score > 75 ? 'success' : score > 60 ? 'warning' : '';

  return (
    <div>
        <Badge bg={color}>{score}</Badge>
    </div>
  )
}

export default CriticScore