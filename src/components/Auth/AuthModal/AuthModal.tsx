import { AuthLogin, AuthRegistr, Modal } from '../..'
import { isRegistrSelect, useAppSelector } from '../../../redux'

const AuthModal: React.FC = () => {
  const isRegistr = useAppSelector(isRegistrSelect)
  return <Modal>{isRegistr ? <AuthRegistr /> : <AuthLogin />}</Modal>
}

export default AuthModal
