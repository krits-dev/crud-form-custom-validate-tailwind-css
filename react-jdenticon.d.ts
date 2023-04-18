declare module 'react-jdenticon' {
  import { ComponentType } from 'react'

  interface JdenticonProps {
    value: string
    size?: number
    hash?: string
    padding?: number
    bgColor?: string
    fgColor?: string
    borderRadius?: number
    style?: object
    className?: string
  }

  const Jdenticon: ComponentType<JdenticonProps>

  export default Jdenticon
}
