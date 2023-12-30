import { IdeaEvaluation } from '../..'
import styles from './IdeaItem.module.scss'

const IdeaItem: React.FC = () => {
  return (
    <li className={styles.IdeaItem}>
      <p>Maks Maksimovich</p>
      <div>
        <IdeaEvaluation />
        <button>View Idea</button>
      </div>
    </li>
  )
}

export default IdeaItem
