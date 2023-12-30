import { Link } from 'react-router-dom'
import styles from './Banner.module.scss'

interface IBannerProps {
  to: string
  label?: string
}

const Banner: React.FC<IBannerProps> = ({ to, label }) => {
  return (
    <Link to={to} className={styles.Banner}>
      {label}
    </Link>
  )
}

export default Banner
