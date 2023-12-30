
import { openLoginModal, openRegistrModal, useAppDispatch } from '../../../redux'
import styles from './AuthLinks.module.scss'

interface IAuthLinksProps {
  closeNavMenu?: () => void
}

const AuthLinks: React.FC<IAuthLinksProps> = ({ closeNavMenu }) => {
  const dispatch = useAppDispatch()

  return (
    <div className={styles.AuthLinks}>
      <button
        onClick={() => {
          closeNavMenu && closeNavMenu()
          dispatch(openLoginModal())
        }}
      >
        Sign In
      </button>
      <span>or</span>
      <button
        onClick={() => {
          closeNavMenu && closeNavMenu()
          dispatch(openRegistrModal())
        }}
      >
        Register
      </button>
    </div>
  )
}

export default AuthLinks
