import { Outlet } from 'react-router-dom'
import styles from './AppLayout.module.scss'
import { AuthModal, NavMenu } from '../..'

const AppLayout: React.FC = () => {
  
  return (
    <main className={styles.AppLayout}>
      <NavMenu />
      <Outlet />
      <AuthModal />
    </main>
  )
}

export default AppLayout
