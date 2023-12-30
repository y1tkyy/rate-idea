import { IdeaItem, Title } from '../..'
import styles from './IdeasList.module.scss'
import classNames from 'classnames'

interface IIdeasListProps {
  className?: string
}

const IdeasList: React.FC<IIdeasListProps> = ({ className }) => {
  return (
    <div className={classNames(styles.IdeasList, className)}>
      <Title className={styles.Title}>Ideas ranking</Title>
      <ul>
        <IdeaItem />
        <IdeaItem />
        <IdeaItem />
        <IdeaItem />
        <IdeaItem />
        <IdeaItem />
        <IdeaItem />
        <IdeaItem />
        <IdeaItem />
      </ul>
    </div>
  )
}

export default IdeasList
