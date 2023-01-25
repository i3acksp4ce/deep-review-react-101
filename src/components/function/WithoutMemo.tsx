import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useViewModel } from '../viewModel'

interface IProps {
  randomWrapperNumber: () => void
  wrapperCount: number
}

export const WithoutMemo = ({ randomWrapperNumber, wrapperCount }: IProps) => {
  const { count, incrementCount, decrementCount } = useViewModel()

  const wrapperCountWithoutMemo = wrapperCount

  const memoWrapperCount = useMemo(() => {
    console.count('without memo => memoWrapperCount')
    return wrapperCount
  }, [count])

  console.count('without memo => render')

  useEffect(() => {
    console.log(`without memo => update`)

    return () => {
      // console.log(`unmount ${type}`)
    }
  })

  useEffect(() => {
    console.log(`without memo => mounth`)
  }, [])

  useEffect(() => {
    console.log(`without memo => count update`)
  }, [count])
  return (
    <>
      <div className="bg-green-100 py-2 space-y-4">
        <div className="text-center space-y-4">
          <p> Component without memo </p>
          <p>wrapper count: {wrapperCount}</p>
          <p>
            Fn call wrapper count: {wrapperCountWithoutMemo}|{memoWrapperCount}
          </p>
        </div>
        <div className="flex justify-center gap-2 items-center">
          <div className="block">Count {count}</div>
          <button className="btn" onClick={incrementCount}>
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
