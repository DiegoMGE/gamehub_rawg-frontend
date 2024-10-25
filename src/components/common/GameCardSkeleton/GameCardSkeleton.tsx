import { Card } from 'react-bootstrap'
import Skeleton from '../Skeleton/Skeleton'

const GameCardSkeleton = () => {
  return (
    <Card>
        <Skeleton height={165} />
        <Card.Body>
            <Skeleton variant='text' width="80%"/>
            <Skeleton variant='text' />
            <Skeleton variant='text' width="30%"/>
        </Card.Body>
    </Card>
  )
}

export default GameCardSkeleton