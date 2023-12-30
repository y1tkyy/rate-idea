import styles from './Section.module.scss'
import classNames from 'classnames'

interface ISectionProps {
  className?: string
  title: string
  children?: string | JSX.Element | JSX.Element[]
}

const Section: React.FC<ISectionProps> = ({ className, children, title }) => {
  return (
    <section className={classNames(styles.Section, className)}>
      <header>
        <h1>{title}</h1>
      </header>
      <main className={styles.main}>{children}</main>
      <footer>&copy; 2023 RateIdea</footer>
    </section>
  )
}

export default Section
