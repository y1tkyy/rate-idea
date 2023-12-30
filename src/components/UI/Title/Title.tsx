import styles from './Title.module.scss'
import maks from 'classnames'

interface ITitleProps {
  className?: string
  children: string
}

const Title: React.FC<ITitleProps> = ({ className, children }) => {
  return <h2 className={maks(styles.Title, className)}>{children}</h2>
}

export default Title
