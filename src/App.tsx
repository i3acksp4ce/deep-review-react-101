import { useEffect, useState } from 'react'
// import './App.css'
import { ContextWrapper } from './components/context/ContextWrapper'
import { Expose } from './components/expose/Expose'
import { Reducer } from './components/reducer/Reducer'
import { Inputs } from './components/unique-id/Inputs'
import { Wrapper } from './components/Wrapper'
import { When } from './utils/When'

function App() {
  const [show, setShow] = useState(false)
  const [showTable, setShowTable] = useState(true)

  console.count(`app => render`)

  useEffect(() => {
    console.log('app => update')
  })

  useEffect(() => {
    console.log('app => mount')
  }, [])
  return (
    <>
      <div className="flex flex-col min-h-screen gap-y-4">
        <div className="text-center">
          <When is={show}>
            <div>Text Visible</div>
          </When>
          <button
            className="bg-red-300 px-4 py-1 rounded-md"
            onClick={() => setShow(!show)}
          >
            Toggle
          </button>
        </div>
        <div>
          <Wrapper />
          <Inputs />
          <Expose />
          <Reducer />
          <ContextWrapper />
        </div>
      </div>
    </>
  )
}

export default App
