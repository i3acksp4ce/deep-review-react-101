import { useReducer } from 'react'

enum CounterActionType {
  increment = 'increment',
  decrement = 'decrement',
}

type CounterActionT = {
  type: CounterActionType
}

function counterReducer(state = 0, action: CounterActionT) {
  switch (action.type) {
    case 'increment': {
      return state + 1
    }

    case 'decrement': {
      return state - 1
    }
    default:
      return state
  }
}

export const Reducer = () => {
  const [count, counterDispatch] = useReducer(counterReducer, 0)

  return (
    <>
      <div className="flex justify-center flex-col items-center py-4 bg-blue-100">
        <p>Reducer</p>
        <p>Count: {count}</p>
        <div className="flex justify-center">
          <button
            className="btn"
            onClick={() =>
              counterDispatch({ type: CounterActionType.increment })
            }
          >
            +
          </button>
          <button
            className="btn"
            onClick={() =>
              counterDispatch({ type: CounterActionType.decrement })
            }
          >
            -
          </button>
        </div>
      </div>
    </>
  )
}
