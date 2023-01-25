import { useMemo, useState } from 'react'

export const useViewModel = () => {
  const [count, setCount] = useState(0)

  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1
  }

  function incrementCount() {
    setCount(count + 1)
  }

  function decrementCount() {
    setCount(count - 1)
  }

  const memoGetRandomNumber = useMemo(() => getRandomNumber(), [count])

  return {
    count,
    setCount,
    incrementCount,
    decrementCount,

    getRandomNumber,
    memoGetRandomNumber,
  }
}
