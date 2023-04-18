import { ChangeEvent } from 'react'
import { Input } from '@/components/UI'

interface Props {
  id: string
  label: string
  value: string
  maxLength: number
  error: string
  pattern: (value: string) => string
  onChangeForm: (id: string, value: string) => void
}

function FormInput({
  id,
  label,
  value,
  maxLength,
  pattern,
  onChangeForm,
  error,
}: Props) {
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const validatedValue = pattern(value)

    onChangeForm(id, validatedValue)
  }
  return (
    <div className='flex flex-col'>
      <Input id={id} label={label} value={value} maxLength={maxLength} onChange={onChangeInput} />
      {error && (
        <div className={`error pt-[10px] ${error && 'show'}`}>{error}</div>
      )}
    </div>
  )
}

FormInput.defaultProps = {
  id: '',
  label: '',
  value: '',
  maxLength: 25,
  error: '',
  validate: () => null,
  onChangeForm: () => null,
}

export default FormInput
