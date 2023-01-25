import { useRef } from 'react'
import { Child, IChildHandle } from './Child'

export const Expose = () => {
  const childRef = useRef<IChildHandle>(null)

  function plus() {
    childRef.current?.incrementCount()
  }

  function minus() {
    childRef.current?.decrementCount()
  }

  return (
    <>
      <div className="flex justify-center flex-col items-center py-4 bg-red-100">
        <p>Parrent</p>
        <div className="flex justify-center">
          <button className="btn" onClick={plus}>
            +
          </button>
          <button className="btn" onClick={minus}>
            -
          </button>
        </div>
        <Child ref={childRef} />
      </div>
    </>
  )
}
