import { useEffect, useState } from "react";
import { Api } from "./api";
import { Home } from "./pages/home";
import { Link } from "./components/Link";
import { ColorPage } from "./pages/colorpage";
import * as C from './Main'
import { Routes } from "./Routes/MainRoutes";

type Props = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

function App() {
  const [galery, setGalery] = useState<Props[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const requisi = async () => {
    const json = await Api.requisi();
    setGalery(json);
    setLoading(true);
  };

  useEffect(() => {
    requisi();
  }, []);

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <hr />  
      {!loading && <p>Carregando...</p>}
      {loading &&
      <Routes />
      }
      
    </>
  );
}

export default App;
