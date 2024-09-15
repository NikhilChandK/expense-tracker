import React from 'react'
type InputProps = {
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  children?: React.ReactNode
}
const Input = (props: InputProps) => {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={(e) => props.onChange(e)}
    />
  )
}

export default Input
