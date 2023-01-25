import { createContext } from 'react'
import { useViewModel } from '../viewModel'
import { Child1 } from './Child1'
import { Child2 } from './Child2'
import { Child3 } from './Child3'
import { CountContext } from './CoutContext'

export const ContextWrapper = () => {
  const { count, incrementCount, decrementCount } = useViewModel()
  return (
    <>
      <CountContext.Provider value={count}>
        <div className="gap-y-4 bg-purple-100 py-4 text-center">
          <p>Context</p>
          <div className="flex justify-center gap-4">
            <button className="btn" onClick={incrementCount}>
              +
            </button>
            <button className="btn" onClick={decrementCount}>
              -
            </button>
          </div>
          <div className="gap-y-4 mt-4 flex flex-col justify-center items-center">
            <Child1 />
            <Child2 />
            <Child3 />
          </div>
        </div>
      </CountContext.Provider>
    </>
  )
}
