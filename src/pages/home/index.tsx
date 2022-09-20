import { useEffect, useState } from "react";
import { Link } from "../../components/Link";
import { Api } from "../../api";



export function Home() {


    type Props = {
        albumId: number;
        id: number;
        title: string;
        url: string;
        thumbnailUrl: string;
      };
      
const [galery, setGalery] = useState<Props[]>([]);

const requisi = async () => {
    const json = await Api.requisi();
    setGalery(json);
  };

  useEffect(() => {
    requisi()
  },[])
    return (
        <>
          <p>
            {galery.map((e) => (
              <div>
                <Link content={e.title} onclick={e} />
              </div>
        ))}
       </p>   
    </>
    )
}