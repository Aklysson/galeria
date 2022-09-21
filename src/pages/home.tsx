import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../api";
import * as C from '../Main'

export function Home() {


    type Props = {
        albumId: number;
        id: number;
        title: string;
        url: string;
        thumbnailUrl: string;
      };
      
const [galery, setGalery] = useState<Props[]>([]);

const requisis = async () => {
    const json = await Api.requisi();
    setGalery(json);
  };

  useEffect(() => {
    requisis()
  },[])
    return (
        <>
            {galery.map((e) => (
              <C.Link>
                <Link to={`/albuns/${e.id}`}>{e.title}</Link>
              </C.Link>
        ))}  
    </>
    )
}