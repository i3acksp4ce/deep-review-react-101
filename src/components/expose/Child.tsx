import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useViewModel } from '../viewModel'

/**
 * typescript useImperativeHandle
 * ref: https://stackoverflow.com/questions/62210286/declare-type-with-react-useimperativehandle
 */

export interface IChildHandle {
  incrementCount: () => void
  decrementCount: () => void
}

export const Child = forwardRef<IChildHandle>((props, ref) => {
  const { count, incrementCount, decrementCount } = useViewModel()

  useImperativeHandle(ref, () => ({
    incrementCount,
    decrementCount,
  }))
  return (
    <>
      <div>child count: {count}</div>
    </>
  )
})
