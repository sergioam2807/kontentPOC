import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const test = 123

  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        <button
          onClick={() => {
            setCount((count) => count + 2)
          }}
        >
          count is {count} {test}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more edit
      </p>
    </>
  )
}

export default App
