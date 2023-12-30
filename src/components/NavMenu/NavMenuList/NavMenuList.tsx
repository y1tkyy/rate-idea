import { NavLink } from 'react-router-dom'
import styles from './NavMenuList.module.scss'
import { AuthLinks } from '../..'
import classNames from 'classnames'

interface INavMenuListProps {
  className?: string
  isOpen: boolean
  closeNavMenu?: () => void
}

const NavMenuList: React.FC<INavMenuListProps> = ({
  className,
  isOpen,
  closeNavMenu,
}) => {
  return (
    <div
      className={classNames(styles.NavMenuList, className, {
        [styles['NavMenuList--active']]: isOpen,
      })}
    >
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : '')}
            onClick={closeNavMenu}
          >
            Main
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rate"
            className={({ isActive }) => (isActive ? styles.active : '')}
            onClick={closeNavMenu}
          >
            Rate Ideas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? styles.active : '')}
            onClick={closeNavMenu}
          >
            Profile
          </NavLink>
        </li>
      </ul>
      <footer className={styles.footer}>
        <AuthLinks closeNavMenu={closeNavMenu}/>
      </footer>
    </div>
  )
}

export default NavMenuList
