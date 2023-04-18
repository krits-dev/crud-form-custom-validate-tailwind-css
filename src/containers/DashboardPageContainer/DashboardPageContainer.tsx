import { useContext } from 'react'
import {
  CustomersContext,
  ICustomersContext,
} from '@/providers/CustomersProvider'
import { ContentLayout } from '@/layouts'
import {
  AddCustomerForm,
  EditCustomerForm,
  CustomerList,
} from '@/modules/DashboardPage'

function DashboardPageContainer() {
  const { editableCustomer } = useContext(CustomersContext) as ICustomersContext
  return (
    <ContentLayout>
      {editableCustomer ? <EditCustomerForm /> : <AddCustomerForm />}
      <CustomerList />
    </ContentLayout>
  )
}

export default DashboardPageContainer
