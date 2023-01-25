import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useViewModel } from '../viewModel'

interface IProps {
  randomWrapperNumber: () => void
  wrapperCount: number
}

export const WithMemo = memo(
  ({ randomWrapperNumber, wrapperCount }: IProps) => {
    const {
      count,
      incrementCount,
      decrementCount,
      memoGetRandomNumber,
      getRandomNumber,
    } = useViewModel()

    const wrapperCountWithoutMemo = wrapperCount

    const memoWrapperCount = useMemo(() => {
      console.count('with memo => memoWrapperCount')
      return wrapperCount
    }, [count])

    console.count('with memo => render')

    useEffect(() => {
      console.log(`with memo => update`)

      return () => {
        // console.log(`unmount ${type}`)
      }
    })

    useEffect(() => {
      console.log(`with memo => mounth`)
    }, [])

    useEffect(() => {
      console.log(`with memo => count update`)
    }, [count])
    return (
      <>
        <div className="bg-green-100 py-2 space-y-4">
          <div className="text-center space-y-4">
            <p> Component with memo </p>
            <p>wrapper count: {wrapperCount}</p>
            <p>
              Fn call wrapper count: {wrapperCountWithoutMemo}|
              {memoWrapperCount}
            </p>
            <p>random number without memo: {getRandomNumber()}</p>
            <p>memo random number when count update: {memoGetRandomNumber}</p>
            <button className="btn" onClick={randomWrapperNumber}>
              + to wrapper
            </button>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <div className="block">Count {count}</div>
            <button
              className="btn"
              onClick={() => {
                incrementCount()
              }}
            >
              +
            </button>
            <button className="btn" onClick={decrementCount}>
              -
            </button>
          </div>
        </div>
      </>
    )
  }
)
