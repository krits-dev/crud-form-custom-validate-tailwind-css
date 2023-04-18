import { useState, FormEvent, ChangeEvent, useContext } from 'react'
import { Title, Button } from '@/components/UI'
import { FormInput, FormPassword, FormRadioGroup } from '@/components/Form'
import {
  patternLettersNoSpaces,
  patternLettersDigitsSpaces,
  patternLettersDigitsNoSpaces,
  patternEmail,
} from '@/tools/patterns'
import { validateEmail, validateLength } from '@/tools/validators'
import {
  CustomersContext,
  ICustomersContext,
} from '@/providers/CustomersProvider'
import { ICustomer } from '@/data/customers'

interface FormValues {
  [key: string]: string
}

const initialValues = {
  name: '',
  last_name: '',
  company: '',
  status: 'user',
  email: '',
  password: '',
}

function AddCustomerForm() {
  const { addCustomer } = useContext(CustomersContext) as ICustomersContext
  const [formValues, setFormValues] = useState<FormValues>(initialValues)
  const [formErrors, setFormErrors] = useState<FormValues>({})

  const onChangeForm = (id: string, value: string) => {
    setFormValues({ ...formValues, [id]: value })
  }

  const onChangeRadioGroup = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, status: e.target.value })
  }

  // Submit form
  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let isValid = true
    const errors: FormValues = {}

    // Check fields for length and validate
    for (const key in formValues) {
      if (!formValues[key].length) {
        errors[key] = 'Required'
        isValid = false
      }
      // Validate email
      if (
        key === 'email' &&
        formValues.email.length !== 0 &&
        !validateEmail(formValues.email)
      ) {
        errors[key] = 'Invalid email'
        isValid = false
      }
      // Validate password length
      if (
        key === 'password' &&
        formValues.password.length &&
        !validateLength(8, formValues.password)
      ) {
        errors[key] = '8+ characters'
        isValid = false
      }
    }

    setFormErrors(errors)

    // Submit form if no errors
    if (isValid) {
      const customer: ICustomer = {
        name: formValues.name,
        last_name: formValues.last_name,
        company: formValues.company,
        status: formValues.status,
        email: formValues.email,
        password: formValues.password,
      }
      addCustomer(customer)
      setFormValues(initialValues)
    }
  }

  return (
    <div className='w-[512px] p-8 border-r border-[#E2E8F0]'>
      <Title inter20 text='Add Customer' />
      <form onSubmit={onSubmitForm}>
        {/* Name & LastName */}
        <div className='flex mt-[40px]'>
          <div className='mr-[24px]'>
            <FormInput
              id='name'
              label='Name'
              value={formValues.name}
              pattern={patternLettersNoSpaces}
              onChangeForm={onChangeForm}
              error={formErrors.name}
            />
          </div>
          <div className='mr-0'>
            <FormInput
              id='last_name'
              label='Last Name'
              value={formValues.last_name}
              pattern={patternLettersNoSpaces}
              onChangeForm={onChangeForm}
              error={formErrors.last_name}
            />
          </div>
        </div>
        {/* Company */}
        <div className='mt-[24px]'>
          <FormInput
            id='company'
            label='Company'
            value={formValues.company}
            maxLength={25}
            pattern={patternLettersDigitsSpaces}
            onChangeForm={onChangeForm}
            error={formErrors.company}
          />
        </div>
        <div className='mt-[24px]'>
          <FormRadioGroup
            label='Status'
            option1='user'
            option2='admin'
            label1='User'
            label2='Administrator'
            selectedValue={formValues.status}
            onChange={onChangeRadioGroup}
          />
        </div>
        {/* Email */}
        <div className='mt-[24px]'>
          <FormInput
            id='email'
            label='Email'
            value={formValues.email}
            maxLength={25}
            pattern={patternEmail}
            onChangeForm={onChangeForm}
            error={formErrors.email}
          />
        </div>
        {/* Password */}
        <div className='mt-[24px]'>
          <FormPassword
            id='password'
            label='Password'
            value={formValues.password}
            maxLength={25}
            pattern={patternLettersDigitsNoSpaces}
            onChangeForm={onChangeForm}
            error={formErrors.password}
          />
        </div>
        {/* Submit button */}
        <div className='mt-[24px]'>
          <Button
            type='submit'
            text='Save'
            className='button'
            onClickAction={() => onSubmitForm}
          />
        </div>
      </form>
    </div>
  )
}

export default AddCustomerForm
