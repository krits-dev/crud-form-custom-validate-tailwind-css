import { ChangeEvent } from 'react'

interface Props {
  id: string
  label: string
  type: 'text' | 'password' | undefined
  value: string
  maxLength: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function Input({ id, label, type, value, maxLength, onChange }: Props) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={id} className='block label'>
        {label}
      </label>
      <input
        className='input text-input'
        id={id}
        type={type}
        autoComplete='off'
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
    </div>
  )
}

Input.defaultProps = {
  id: '',
  label: '',
  type: 'text',
  value: '',
  maxLength: 12,
  onChange: () => null,
}

export default Input
