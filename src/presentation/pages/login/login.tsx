import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, Footer, Input, FormStatus } from '../../components'
import Context from '../../contexts/form/form-context'

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false
  })
  const [errorState] = useState({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    mainError: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, errorState }}>
        <form className={Styles.form}>
          <h2>Login</h2>

          <Input type="email" name="email" placeholder="Digite seu e-mail"/>
          <Input type="password" name="password" placeholder="Digite sua password"/>

          <button data-testid="submit" disabled type="submit" className={Styles.submit}>Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
        <Footer />
      </Context.Provider>
    </div>
  )
}

export default Login
