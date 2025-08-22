import './App.css'
import { Modal} from './components'
import { useModalContext } from './components/Modal/context'

function App() {
  const {setState} = useModalContext()

  const openModal = () => {
    setState(true)
  }

  return (
    <>
      <Modal>
        <h2>Hello From Modal</h2>
      </Modal>
      <button onClick={openModal}>Open Modal</button>
    </>
  )
}

export default App
