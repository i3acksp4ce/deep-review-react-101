import { useEffect, useState } from 'react'
// import './App.css'
import { ClassComponent } from './components/ClassComponent'
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
        </div>
      </div>
    </>
  )
}

export default App
