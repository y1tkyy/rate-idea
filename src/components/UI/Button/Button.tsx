import classNames from 'classnames'
import styles from './Button.module.scss'

interface IButtonProps {
  className?: string
  children: string
  type?: 'submit' | 'reset' | 'button'
}

const Button: React.FC<IButtonProps> = ({ className, children, type }) => {
  return (
    <button className={classNames(styles.Button, className)} type={type}>
      {children}
    </button>
  )
}

export default Button
