import React, { useContext } from 'react'
import Styles from './form-status-styles.scss'
import Spinner from '../../../presentation/components/spinner/spinner'
import Context from '../../contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      { state.isLoading && <Spinner className={Styles.spinner}/> }
      { errorState.mainError && <span className={Styles.error}>{errorState.mainError}</span> }
    </div>
  )
}

export default FormStatus
