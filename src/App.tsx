import './App.css'
import { Button, ColorRed, CustomForm } from './components'
import { GlobalProvider } from './context/global.provider'

function App() {

  const clickedOnMe = () => {
    alert("Clicked on me!!")
  }

  const sayHello = () => {
    alert("Helo!!")
  }

  return (
    <GlobalProvider>
      <ColorRed><Button parentMethod={sayHello}>My red button</Button></ColorRed>
      <Button parentMethod={clickedOnMe}>My normal button</Button>
    </GlobalProvider>
  )
}

export default App
