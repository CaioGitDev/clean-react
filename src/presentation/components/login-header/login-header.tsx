import React, { memo } from 'react'
import Styles from './login-header-styles.scss'
import Logo from '../../components/logo/logo'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>Project with clean Architecture</h1>
    </header>
  )
}

export default memo(LoginHeader)
