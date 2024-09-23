import { useState } from 'react'
import UserForm from './UseForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserForm/>
    </>
  )
}

export default App
