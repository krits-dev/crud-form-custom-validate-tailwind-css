import { Fragment, useContext } from 'react'
import {
  CustomersContext,
  ICustomersContext,
} from '@/providers/CustomersProvider'
import { Title } from '@/components/UI'
import { Customer } from '@/components'

function CustomerList() {
  const { customers } = useContext(CustomersContext) as ICustomersContext

  const head = [
    {
      name: 'Name',
      style: 'column w-[30%] pr-[24px]',
    },
    {
      name: 'Company',
      style: 'column w-[30%] pr-[24px]',
    },
    {
      name: 'Email',
      style: 'column w-[30%] pr-[24px]',
    },
    {
      name: 'Admin',
      style: 'column w-[4%]',
    },
    {
      name: 'Actions',
      style: 'column w-[58px] ml-auto text-center',
    },
  ]

  return (
    <div className='w-full flex flex-col p-8'>
      <Title inter20 text='Customers' />
      <div className='flex mt-[40px] w-full'>
        {head.map(({ name, style }) => (
          <div key={name} className={style}>
            {name}
          </div>
        ))}
      </div>
      {customers?.map(customer => (
        <Fragment key={customer._id}>
          <Customer customer={customer} />
        </Fragment>
      ))}
    </div>
  )
}

export default CustomerList
