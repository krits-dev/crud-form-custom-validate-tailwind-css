import { memo } from 'react'

interface Props {
  text: string
  inter20?: boolean
  inter16?: boolean
}

function Title({ text, inter20, inter16 }: Props) {
  return (
    <>
      {inter20 && <h2 className='inter-20'> {text}</h2>}
      {inter16 && <h3 className='inter-16'> {text}</h3>}
    </>
  )
}

Title.defaultProps = {
  text: '',
  inter20: false,
  inter16: false,
}

export default memo(Title)
