import { Banner, IdeasList, Section } from '../..'
import styles from './Main.module.scss'

const Main: React.FC = () => {
  return (
    <Section className={styles.Main} title="Main">
      <Banner to="/profile" label="Get Your Idea Evaluation" />
      <IdeasList className={styles.IdeaList} />
    </Section>
  )
}

export default Main
