import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '../../../presentation/components/spinner/spinner'
import Logo from '../../components/Logo/logo'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <Logo />
        <h1>Project with clean Architecture</h1>
      </header>
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu e-mail"/>
          <span className={Styles.status}></span>
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder="Digite sua password"/>
          <span className={Styles.status}></span>
        </div>
        <button type="submit" className={Styles.submit}>Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner}/>
          <span className={Styles.error}>Error</span>
        </div>
      </form>
      <footer className={Styles.footer}></footer>
    </div>
  )
}

export default Login
