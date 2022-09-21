import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Api } from "../api"

export function AboutItem(){

    type Props = {
        albumId: number;
        id: number;
        title: string;
        url: string;
        thumbnailUrl: string;
      };

    const [item,setItem] = useState<Props>()
    const params = useParams()

    const photos = async() => {
        if(params.id) {
       let result = await Api.requisçao(Number(params.id))
       setItem(result)
        }
    }

    useEffect(() =>{
        photos()
    },[])



    return (
        <>
        <p>{item?.title}</p>

        </>
    )
}