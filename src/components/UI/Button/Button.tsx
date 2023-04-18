import { memo, SyntheticEvent } from 'react'
import Image from 'next/image'
import DeleteIcon from './delete.svg'
import EditIcon from './edit.svg'

interface Props {
  className: string
  text?: string
  icon?: boolean
  iconIs?: 'edit' | 'delete' | null
  type?: 'button' | 'submit'
  onClickAction?: (e: SyntheticEvent) => void
}

function Button({ className, text, icon, iconIs, type, onClickAction }: Props) {
  let buttonIcon =
    iconIs === 'edit' ? (
      <Image src={EditIcon} alt='edit customer' />
    ) : iconIs === 'delete' ? (
      <Image src={DeleteIcon} alt='delete customer' />
    ) : null

  let content = icon ? buttonIcon : text

  return (
    <button className={className} onClick={onClickAction} type={type}>
      {content}
    </button>
  )
}

Button.defaultProps = {
  className: '',
  text: '',
  icon: false,
  iconIs: null,
  type: 'button',
  onClickAction: () => null,
}

export default memo(Button)
