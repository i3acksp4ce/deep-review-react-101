import { useId } from 'react'

export const Input = () => {
  const inputId = useId()
  return (
    <>
      <label>
        input: {inputId}
        <input type="text" aria-describedby={inputId} />
        <p id={inputId} />
      </label>
    </>
  )
}
