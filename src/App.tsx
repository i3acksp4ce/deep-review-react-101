import { useEffect, useState } from 'react'
// import './App.css'
import { ClassComponent } from './components/ClassComponent'
import { ContextWrapper } from './components/context/ContextWrapper'
import { Expose } from './components/expose/Expose'
import { Reducer } from './components/reducer/Reducer'
import { Inputs } from './components/unique-id/Inputs'
import { Wrapper } from './components/Wrapper'

function App() {
  const [show, setShow] = useState(true)
  const isShow = show ? 'block' : 'hidden'

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
          <div className={isShow}>Text Visible</div>
          <button
            className="bg-red-300 px-4 py-1 rounded-md"
            onClick={() => setShow(!show)}
          >
            Toggle
          </button>
        </div>
        <div>
          {/* <ClassComponent /> */}
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
