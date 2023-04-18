import { NextPage } from 'next'
import { PageLayout } from '@/layouts'
import { DashboardPageContainer } from '@/containers'

const DashboardPage: NextPage = () => {
  return (
    <PageLayout title='Dashboard'>
      <DashboardPageContainer />
    </PageLayout>
  )
}

export default DashboardPage
