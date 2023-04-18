import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { DASHBOARD_PAGE } from '@/constants/routes'

function MainPageContainer() {
  const router = useRouter()

  useEffect(() => {
    router.push(DASHBOARD_PAGE)
  }, [])

  return <div>Redirecting to Dashboard page...</div>
}

export default MainPageContainer
