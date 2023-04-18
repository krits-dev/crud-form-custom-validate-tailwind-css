import { useContext } from 'react'
import { ICustomer } from '@/data/customers'
import { Title, Button } from '../UI'
import {
  CustomersContext,
  ICustomersContext,
} from '@/providers/CustomersProvider'
import Jdenticon from 'react-jdenticon'

interface Props {
  customer: ICustomer
}

function Customer({ customer }: Props) {
  const { deleteCustomer, getEditableCustomer } = useContext(
    CustomersContext
  ) as ICustomersContext

  const { _id, avatar, name, last_name, company, email, status } = customer

  return (
    <div className='h-auto flex mt-[12px]'>
      {/* Avatar & Name */}
      <div className='flex items-center w-[30%] pr-[24px] h-auto'>
        <div className='w-[32px] h-[32px] rounded-[8px] bg-[#F1F5F9] p-[4px] mr-[8px]'>
          <Jdenticon size={24} value={name} />
        </div>
        <Title inter16 text={`${name} ${last_name}`} />
      </div>
      {/* Company */}
      <div className='flex items-center w-[30%] pr-[24px] h-auto'>
        <Title inter16 text={company} />
      </div>
      {/* Email */}
      <div className='flex items-center w-[30%] pr-[24px] h-auto'>
        <Title inter16 text={email} />
      </div>
      {/* Status */}
      <div className='h-auto w-[4%] py-[4px]'>
        <div
          className={`w-full h-[24px] ${
            status === 'admin' ? 'bg-[#0EA5E9]' : 'bg-[#E2E8F0]'
          } rounded-[4px]`}
        />
      </div>
      {/* Actions */}
      <div className='flex w-[58px] h-[32px] items-center justify-between ml-auto'>
        <Button
          icon
          iconIs='edit'
          onClickAction={() => getEditableCustomer(_id as number)}
        />
        <Button
          icon
          iconIs='delete'
          onClickAction={() => deleteCustomer(_id as number)}
        />
      </div>
    </div>
  )
}

export default Customer
