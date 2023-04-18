import { createContext, useState, ReactNode, useMemo } from 'react'
import { ICustomer, customers as data } from '@/data/customers'

interface IContext {
  children: ReactNode
}

export interface ICustomersContext {
  customers: ICustomer[]
  editableCustomer: ICustomer | null
  addCustomer: (customer: ICustomer) => void
  deleteCustomer: (id: number) => void
  getEditableCustomer: (id: number) => void
  editCustomer: (id: number, editableCustomer: ICustomer) => void
}

export const CustomersContext = createContext<ICustomersContext | null>(null)

function CustomersProvider({ children }: IContext) {
  const [customers, setCustomers] = useState<ICustomer[]>(data)
  const [editableCustomer, setEditableCustomer] = useState<ICustomer | null>(
    null
  )

  // Add
  const addCustomer = (customer: ICustomer) => {
    const newCustomer: ICustomer = {
      _id: Math.random(),
      avatar: 'any',
      name: customer.name,
      last_name: customer.last_name,
      company: customer.company,
      email: customer.email,
      status: customer.status,
      password: customer.password,
    }
    setCustomers([...customers, newCustomer])
  }
  //Edit
  const editCustomer = (id: number, editedCustomer: ICustomer) => {
    customers.filter(customer => {
      if (id === customer._id) {
        customer.name = editedCustomer.name
        customer.last_name = editedCustomer.last_name
        customer.company = editedCustomer.company
        customer.status = editedCustomer.status
        customer.email = editedCustomer.email
      }
      return setCustomers([...customers])
    })
    setEditableCustomer(null)
  }
  // Delete
  const deleteCustomer = (id: number) => {
    setCustomers(customers.filter(({ _id }) => _id !== id))
  }
  //Find
  const getEditableCustomer = (id: number) => {
    const customer = customers.find(customer => id === customer._id)
    setEditableCustomer(customer as ICustomer)
  }

  const value = useMemo(
    () => ({
      customers,
      editableCustomer,
      deleteCustomer,
      addCustomer,
      getEditableCustomer,
      editCustomer,
    }),
    [customers, editableCustomer]
  )

  return (
    <CustomersContext.Provider value={value}>
      {children}
    </CustomersContext.Provider>
  )
}

export default CustomersProvider
