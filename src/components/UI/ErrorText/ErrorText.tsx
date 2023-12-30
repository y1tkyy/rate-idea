import classNames from 'classnames'
import styles from './ErrorText.module.scss'

interface IErrorTextProps {
  children: string
  className?: string
}

const ErrorText: React.FC<IErrorTextProps> = ({ className, children }) => {
  return <p className={classNames(styles.ErrorText, className)}>{children}</p>
}

export default ErrorText
