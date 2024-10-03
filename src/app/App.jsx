import { useState } from 'react'
import './App.css'
import Landing from "../screens/Landing/index"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='ProjectFont'>
     <Landing/>
    </div>
  )
}

export default App
