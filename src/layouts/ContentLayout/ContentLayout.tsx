import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function ContentLayout({ children }: Props) {
  return <div className='w-[1728px] bg-white m-auto mt-4 flex'>{children}</div>
}

export default ContentLayout
