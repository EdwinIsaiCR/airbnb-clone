import Casas from "../components/Casas"
import { useState, useEffect } from 'react'

export default function Home() {
  const [casas, setCasas] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // nos devuelve un estado
/* const store = useSelector(state => state)*/

  useEffect(() => {
/*     console.log(store) */
  fetchCasa()
  },[]) 

  async function fetchCasa(){
      try {
        setLoading(true)
        setError(false)
        const res = await fetch('/api/casas')
        const newCasas = await res.json()
        setCasas(newCasas)
      }catch (err) {
        setError(true)
      }
      setLoading(false)
  }

  if(error) {
    return <div>Error al cargar...</div>
  }

  if(loading) {
    return <div>Cargando...</div>
  }


  return (
    <>
      <Casas data={casas}/>
    </>
  )
}