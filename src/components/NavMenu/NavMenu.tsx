import { useEffect, useRef, useState } from 'react'
import styles from './NavMenu.module.scss'
import NavMenuList from './NavMenuList/NavMenuList'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navMenuRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const bodyClicked = (e: MouseEvent) => {
      if (!navMenuRef.current?.contains(e.target as Node)) {
        closeNavMenu()
      }
    }
    document.body.addEventListener('click', bodyClicked)

    return () => {
      document.body.removeEventListener('click', bodyClicked)
    }
  }, [])

  const closeNavMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className={styles.NavMenu} ref={navMenuRef}>
      <header className={styles.header}>
        <Link to="/" onClick={closeNavMenu}>
          RateIdea
        </Link>
        <button
          className={classNames(styles.burgerButton, {
            [styles['burgerButton--active']]: isOpen,
          })}
          onClick={() => setIsOpen(prevOpen => !prevOpen)}
        >
          <span></span>
        </button>
      </header>
      <NavMenuList
        className={styles.NavMenuList}
        isOpen={isOpen}
        closeNavMenu={closeNavMenu}
      />
    </nav>
  )
}

export default NavMenu
