import { useContext } from 'react'
import { CountContext } from './CoutContext'

export const Child2 = () => {
  const count = useContext(CountContext)
  return (
    <>
      <div>
        <p>count child 2: {count}</p>
      </div>
    </>
  )
}
