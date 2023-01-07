import { useMediaQuery } from 'react-responsive'

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 600 })
  return isMobile ? children : null
}

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 601 })
  return isNotMobile ? children : null
}

const Ipad = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 601, maxWidth: 992 })
  return isNotMobile ? children : null
}

export {
  Mobile,
  Default,
  Ipad,
}