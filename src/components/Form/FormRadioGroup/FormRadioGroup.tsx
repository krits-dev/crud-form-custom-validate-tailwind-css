import { ChangeEvent } from 'react'

interface Props {
  label: string
  option1: string
  option2: string
  label1: string
  label2: string
  selectedValue: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function FormRadioGroup({
  label,
  option1,
  option2,
  label1,
  label2,
  selectedValue,
  onChange,
}: Props) {
  return (
    <>
      <div className='label pb-[10px]'>{label}</div>
      <div className='radio-group'>
        <div className='w-1/2 relative'>
          <input
            id='1'
            type='radio'
            value={option1}
            checked={selectedValue === option1}
            onChange={onChange}
            className='radio'
          />
          <label htmlFor='1' className='text-input label-center'>
            {label1}
          </label>
        </div>
        <div className='w-1/2 relative z-[100]'>
          <input
            id='2'
            type='radio'
            value={option2}
            checked={selectedValue === option2}
            onChange={onChange}
            className='radio'
          />
          <label htmlFor='2' className='text-input label-center'>
            {label2}
          </label>
        </div>
      </div>
    </>
  )
}

FormRadioGroup.defaultProps = {
  label: 'Label',
  option1: 'option1',
  option2: 'option2',
  label1: 'label1',
  label2: 'label2',
  selectedValue: 'option1',
  onChange: () => null,
}

export default FormRadioGroup
