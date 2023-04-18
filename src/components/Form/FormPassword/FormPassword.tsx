import { useState, ChangeEvent, MouseEvent } from 'react'
import { Input } from '@/components/UI'
import Image from 'next/image'
import ShowIcon from './show.svg'
import HideIcon from './hide.svg'

interface Props {
  id: string
  label: string
  value: string
  maxLength: number
  error: string
  pattern: (value: string) => string
  onChangeForm: (id: string, value: string) => void
}

function FormPassword({
  id,
  label,
  value,
  maxLength,
  pattern,
  onChangeForm,
  error,
}: Props) {
  const [visible, setVisible] = useState<boolean>(false)

  let inputType: 'text' | 'password' = visible ? 'text' : 'password'

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const validatedValue = pattern(value)

    onChangeForm(id, validatedValue)
  }

  const toggleVisible = (e: MouseEvent<HTMLButtonElement>) => {
    setVisible(visible => !visible)
  }

  return (
    <div className='flex flex-col relative'>
      <Input
        id={id}
        label={label}
        value={value}
        maxLength={maxLength}
        type={inputType}
        onChange={onChangeInput}
      />
      <button
        type='button'
        className='absolute right-[8px] top-[42px]'
        onClick={toggleVisible}
      >
        {visible ? (
          <Image src={ShowIcon} alt='show icon' />
        ) : (
          <Image src={HideIcon} alt='hide icon' />
        )}
      </button>
      {error && <div className='error pt-[10px]'>{error}</div>}
      {!error && <div className='placeholder pt-[10px]'>8+ characters</div>}
    </div>
  )
}

FormPassword.defaultProps = {
  id: '',
  label: '',
  value: '',
  maxLength: 30,
  error: '',
  validate: () => null,
  onChangeForm: () => null,
}

export default FormPassword
