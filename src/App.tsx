import './App.css'
import { AppForm, Button } from './components'

function App() {
  const submit = () => {
    alert("submit!!!!!")
  }

  return (
    <>
      <AppForm>
        <Button label='Click on me' parentMethod={submit}></Button>
      </AppForm>
    </>
  )
}

export default App
