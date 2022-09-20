import { Api } from "../api";
import { useState, useEffect } from "react";
import * as C from "../Main";
import { useNavigate } from "react-router-dom";

export function ColorPage() {
  type Props = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  };

  const [photos, setPhotos] = useState<Props[]>([]);

  const requisi = async () => {
    const json = await Api.requisi();
    setPhotos(json);
  };

  useEffect(() => {
    requisi();
  }, []);

  const Navigate = useNavigate();

  return (
    <>
      <C.Container>
        <button onClick={() => Navigate("/")}>Voltar</button>
        <h2>{photos.length}</h2>
      </C.Container>
      {photos.map((e) => (
        <C.Imgs>
          <img src={e.thumbnailUrl} alt="img" />
        </C.Imgs>
      ))}
    </>
  );
}
