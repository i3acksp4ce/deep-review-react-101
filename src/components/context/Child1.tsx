import { useContext } from 'react'
import { CountContext } from './CoutContext'

export const Child1 = () => {
  const count = useContext(CountContext)
  return (
    <>
      <div>
        <p>count child 1: {count}</p>
      </div>
    </>
  )
}
