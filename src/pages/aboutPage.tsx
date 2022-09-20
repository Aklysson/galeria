import { useParams } from "react-router-dom"

export function AboutItem(){

    const params = useParams()
    return (
        <>
        <p>Olá{params.id}</p>
        </>
    )
}