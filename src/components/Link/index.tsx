import { useNavigate, useParams } from 'react-router-dom'
import * as C from './styles'

type Props = {
    content: string
    onclick:  Props2
}

type Props2 = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  };

export function Link({content,onclick}:Props) {

    const Navigate = useNavigate()
    const params = useParams()

    return (
        <C.Container onClick={()=>{Navigate(`${onclick}`)}}>
            <h2>{content}</h2>
        </C.Container>
    )
}