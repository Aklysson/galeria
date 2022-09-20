import * as C from './styles'

type Props = {
    content: string
}

export function Link({content}:Props) {
    return (
        <C.Container>
            <h2>{content}</h2>
        </C.Container>
    )
}