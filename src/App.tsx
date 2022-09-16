import {useEffect, useState} from 'react'
import { Api } from './api'

type Props = {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

function App() {

  const [galery,setGalery] = useState<Props[]>([])
  const [loading,setLoading] = useState<boolean>(false)

const requisi = async() => {
const json = await Api.requisi()
setGalery(json)
setLoading(true)
}

useEffect(() => {
  requisi()
},[])

return (
   <>
    {loading && <div>
      <h1>Galeria de Fotos</h1>
      <hr />
      <p>{galery.map((e) => (
        <div>
        <p>{e.title}</p>
        <img src={e.url}></img>
        </div>
      ))}</p>
      
    </div>}
    {
     !loading && <p>Carregando...</p>
     }
   </>
  )
}

export default App;
