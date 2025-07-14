import { useState } from 'react'
import './App.css'
import { Button } from './components'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Jhon")

  const countMore = () => {
    setCount((count) => count + 1)
  }

  const changeName = () => {
    setName("Jhon Doe")
  }

  return (
    <>
      <Button label={`Count is: ${count}`} parentMethod={countMore}/>
      {name}
      <Button label={`Change Name`} parentMethod={changeName}/>
    </>
  )
}

export default App
