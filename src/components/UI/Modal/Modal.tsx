import styles from './Modal.module.scss'
import { CSSTransition } from 'react-transition-group'
import { useEffect, useRef } from 'react'
import {
  closeModal,
  isOpenSelect,
  useAppDispatch,
  useAppSelector,
} from '../../../redux'

interface IModalProps {
  children: string | JSX.Element | JSX.Element[]
}

const Modal: React.FC<IModalProps> = ({ children }) => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(isOpenSelect)

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <CSSTransition
      in={isOpen}
      timeout={250}
      classNames={{
        enter: styles['Modal-enter'],
        enterActive: styles['Modal-enter-active'],
        exitActive: styles['Modal-exit-active'],
      }}
      unmountOnExit
    >
      <div
        className={styles.Modal}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          if (!modalRef.current?.contains(e.target as Node))
            dispatch(closeModal())
        }}
      >
        <div ref={modalRef}>
          <button onClick={() => dispatch(closeModal())}></button>
          <div>{children}</div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Modal
