import { useContext } from 'react'
import { CountContext } from './CoutContext'

export const Child3 = () => {
  const count = useContext(CountContext)
  return (
    <>
      <div>
        <p>count child 3: {count}</p>
      </div>
    </>
  )
}
