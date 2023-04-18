import Head from 'next/head'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title?: string
  description?: string
  keywords?: string
}

function PageLayout({ children, title, description, keywords }: Props) {
  return (
    <>
      <Head>
        <title>{title || 'any title'}</title>
        <meta name='description' content={`any description` + description} />
        <meta name='robots' content='index, follow' />
        <meta name='keywords' content={keywords || 'any keywords'} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='bg-[#F5F5F5] w-full min-h-full h-auto absolute'>
        {children}
      </div>
    </>
  )
}

export default PageLayout
