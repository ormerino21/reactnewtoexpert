import './App.css'
import { useFetch } from './hooks'

const url = "https://pokeapi.co/api/v2/pokemon/?limit=20"

interface ResponseData {
  count: number,
  next: string | null,
  previous: string | null,
  results: [] | null
}

function App() {
  const {data, loading, error} = useFetch<ResponseData>(url)

  if (loading) {
    return <div>Loading....</div>
  }

  if (error) {
    return <div>Something went wrong: {error.message}</div>
  }

  return (
    <>
      <div>{JSON.stringify(data?.results)}</div>
    </>
  )
}

export default App
