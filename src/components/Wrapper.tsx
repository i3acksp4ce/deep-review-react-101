import { useCallback, useEffect, useState } from 'react'
import { WithoutMemo } from './function/WithoutMemo'
import { WithMemo } from './function/WithMemo'
import { useViewModel } from './viewModel'

export function Wrapper() {
  console.count('wrapper => render')

  const { count, incrementCount, decrementCount, getRandomNumber } =
    useViewModel()
  const [wrapperNumber, setWrapperNumber] = useState(0)
  const [hydrated, setHydrated] = useState(false)

  const someNumber = hydrated && getRandomNumber()

  useEffect(() => {
    setHydrated(true)
  }, [])

  /**
   * ถ้าโยนอะไรที่มันไม่แคชไป มันจะทำให้ pure component re-render ด้วย
   * เวลา parent update
   */
  const randomWrapperNumber = () => setWrapperNumber(() => getRandomNumber())

  const callbackRandomWrapperNumber = useCallback(() => {
    setWrapperNumber(() => getRandomNumber())
  }, [setWrapperNumber])

  return (
    <>
      <div className="bg-gray-300 py-3 space-y-4">
        <p className="text-center">Wrapper</p>
        <p className="text-center">without callback: {someNumber}</p>
        <p className="text-center">with callback {wrapperNumber}</p>
        <div className="flex justify-center gap-2 items-center">
          <button
            className="btn rounded-md"
            onClick={() => {
              incrementCount()
            }}
          >
            + to child
          </button>
          <button className="btn rounded-md" onClick={decrementCount}>
            - to child
          </button>
        </div>

        <WithoutMemo
          randomWrapperNumber={randomWrapperNumber}
          wrapperCount={count}
        />
        <WithMemo
          randomWrapperNumber={callbackRandomWrapperNumber}
          wrapperCount={count}
        />
      </div>
    </>
  )
}
