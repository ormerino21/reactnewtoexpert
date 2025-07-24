import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
      if (!response.ok) {
        throw new Error("Error: Something went wrong")
      }

      const jsonData = await response.json()
      setData(jsonData)
    } catch (error) {
      setError(error as string)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <div>Loading....</div>
  }

  if (error) {
    return <div>Something went wrong: {error}</div>
  }

  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  )
}

export default App
