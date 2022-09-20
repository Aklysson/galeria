import { useEffect, useState } from "react";
import { Api } from "./api";
import { Link } from "./components/Link";

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
      {loading && (
        <div>
          <p>
            {galery.map((e) => (
              <div>
                <Link content={e.title} />
              </div>
            ))}
          </p>
        </div>
      )}
      {!loading && <p>Carregando...</p>}
    </>
  );
}

export default App;
